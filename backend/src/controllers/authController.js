const {hashPassword, comparePassword} = require("../security/bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


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

    // Générer un jeton d'acces pour l'utilisateur
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});

    // Stocker le jeton d'acces dans la base de données
    await User.findByIdAndUpdate(user._id, {token});

    // Retourner le jeton d'acces
    res.setHeader("Authorization", `Bearer ${token}`);

    // Retourner la reponse
    res.status(200).json({message: "Connexion reussie", token, userId: user._id});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};


