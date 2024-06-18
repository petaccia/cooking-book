// controllers/authController.js
const { hashPassword, comparePassword } = require("../security/bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


// Fonction d'inscription de l'utilisateur
exports.signup = async (req, res) => {
  try {
    const { pseudo, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "L'utilisateur existe déjà" });
    }

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

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json({ message: "Connexion réussie", token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Fonction de récupération des informations de l'utilisateur
exports.getCurrentUser = async (req, res) => {
  const { token } = req.cookie

  // Vérification du token
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Utilisateur non connecté, token manquant"
    });
  }

  try {
    // rechercher l'utilisateur dans la base de données
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouveé" });
    }
    // renvoyer les informations de l'utilisateur
    res.status(200).json({
      status: 200,
      user,
      token
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Une erreur est survenue",
      error: error.message
    });
  }
};