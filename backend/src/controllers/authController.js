const { hashPassword, comparePassword } = require("../security/bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Fonction d'inscription de l'utilisateur
exports.signup = async (req, res) => {
  try {
    const { pseudo, email, password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "L'utilisateur existe déjà" });
    }

    // Cryptage du mot de passe de l'utilisateur avec bcrypt avant de le stocker dans la base de données
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ pseudo, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Utilisateur enregistré" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction de connexion de l'utilisateur
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Utilisateur non existant" });
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    // Générer un jeton d'accès pour l'utilisateur
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Stocker le jeton d'accès dans la base de données
    await User.findByIdAndUpdate(user._id, { token });

    // Retourner le jeton d'accès
    res.setHeader("Authorization", `Bearer ${token}`);

    // Retourner la réponse
    res.status(200).json({ message: "Connexion réussie", token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour se connecter avec Google
exports.loginWithGoogle = async (req, res) => {
  try {
    const { tokenId } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email, name } = ticket.getPayload();
    let user = await User.findOne({ email });
    if (!user) {
      // Créer un nouvel utilisateur si aucun utilisateur n'existe avec cette adresse e-mail
      const hashedPassword = await hashPassword("password"); // Vous pouvez utiliser un mot de passe par défaut ou générer un mot de passe aléatoire
      user = new User({ pseudo: name, email, password: hashedPassword });
      await user.save();
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    await User.findByIdAndUpdate(user._id, { token });
    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json({ message: "Connexion réussie", token, userId: user._id });
  } catch (error) {
    res.status(401).json({ message: "L'authentification avec Google a échoué", error: error.message });
  }
};