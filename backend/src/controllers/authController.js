const {hashPassword, comparePassword} = require("../security/bcrypt");
const User = require("../models/userModel");


// Fonction d'inscription de l'utilisateur
exports.signup = async (req, res) => {
  try {
    const {pseudo, email, password} = req.body;

    // Cryptage du mot de passe de l'utilisateur avec bcrypt avant de le stocker dans la base de données
    const hashedPassword = await hashPassword(password);
    const newUser = new User({pseudo, email, password: hashedPassword});
    await newUser.save();
    res.status(201).json({message: "Utilisateur enregisté"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};


// Fonction de connexion de l'utilisateur
exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).json({message: "Utilisateur non existant"});
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({message: "Mot de passe incorrect"});
    }
    res.status(200).json({message: "Connexion reussie"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};