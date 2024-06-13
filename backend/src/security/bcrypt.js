const bcrypt = require("bcrypt");

const saltRounds = 10;
// Cryptage du mot de passe de l'utilisateur avec bcrypt avant de le stocker dans la base de données

// Fonction de cryptage du mot de passe avec du salt
const hashPassword = async(password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  // Crypter le mot de passe
  const hashPassword = bcrypt.hash(password, salt);
  // Retourne le mot de passe crypter
  return hashPassword;
}




// Vérification du mot de passe de l'utilisateur avec bcrypt avant de le stocker dans la base de données

// Fonction de vérification du mot de passe avec du salt
const comparePassword = async(password, hashPassword) => {
  // Comparer le mot de passe avec le mot de passe crypter
  const result = await bcrypt.compare(password, hashPassword);
  // Retourne la vérification du mot de passe
  return result; 
  
};

module.exports = { hashPassword, comparePassword };