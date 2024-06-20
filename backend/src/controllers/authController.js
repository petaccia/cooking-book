// controllers/authController.js
const { hashPassword, comparePassword } = require("../security/bcrypt");
const User = require("../models/userModel");
const { generateToken, verifyToken } = require("../security/jwt");


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
  console.log("données de connexion recues du client :", req.body);
  try {
    const { email, password } = req.body;
    console.log("email et password recues dans le req :", req.body.email, req.body.password);

    // Vérification des champs obligatoires
    if (!email || !password) {
      return res.status(400).json({
        status: 400,
        message: "Veuillez renseigner tous les champs",
      });

    }

    // Recherche de l'utilisateur par email
    const user = await User.findOne({ email });
    console.log("utilsateur trouve :", user);
    if (!user) {
      return res.status(401).json({
        status: 401,
        message: "Email ou mot de passe incorrect",
      });
    }

    // Vérification du mot de passe
    const passwordMatch = await comparePassword(password, user.password);
    console.log("passwordMatch vérifie :", passwordMatch);
    if (!passwordMatch) {
      return res.status(401).json({
        status: 401,
        message: "Email ou mot de passe incorrect",
      });
    }

    // Génération du token JWT
    const payload = { userId: user._id };
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: "1h" };
    const token = generateToken(payload, secret, options);

    // Réponse avec le token et configuration du cookie
    return res.cookie("token", token, { httpOnly: true }).json({
      id: user._id,
      status: 200,
      message: "Connexion réussie",
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 500,
      message: "Une erreur est survenue lors de la connexion",
      error: err.message,
    });
  }
};


// Fonction de récupération des informations de l'utilisateur
exports.getCurrentUser = async (req, res) => {
  const { token } = req.cookies; // Récupération du token depuis les cookies

  // Vérification du token
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Utilisateur non connecté, token manquant",
    });
  }

  try {
    // Vérification et décodage du token
    const { isValid, payload, error } = verifyToken(token, process.env.JWT_SECRET);

    if (!isValid) {
      return res.status(401).json({
        status: 401,
        message: "Token invalide",
        error: error.message,
      });
    }

    const { userId } = payload;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Renvoi des informations de l'utilisateur
    res.status(200).json({
      status: 200,
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Une erreur est survenue",
      error: error.message,
    });
  }
};