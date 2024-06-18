// Fonction pour le token JWT qui sert à l'autorisation de l'utilisateur

const jwt = require('jsonwebtoken');

const generateToken = (payload, secret, options) => { // fonction pour generer le token avec le payload, la clé secrète et les options
  return jwt.sign(payload, secret, options); // fonction qui signe le token
};

const verifyToken = (token, secret) => { // fonction pour vérifier le token
  try {
    const decoded = jwt.verify(token, secret); // fonction qui dechiffre le token
    return { isValid: true, payload: decoded }; // retourne un objet qui retourne le token
  } catch (err) {
    return { isValid: false, error: err }; // retourne un objet qui retourne l'erreur si le token est invalide
  }
};

module.exports = { generateToken, verifyToken };
