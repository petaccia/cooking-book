// seedUsers.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/models/userModel');
const connectDB = require('../src/database/config');
const userData = require('../data/userData');

const createUsers = async () => {
  try {
    console.log('Seeding users...');
    await connectDB();

    for (const user of userData) {
      console.log(`Enregistrement de l'utilisateur : ${user.pseudo}`);
      const newUser = new User(user);
      await newUser.save();
      console.log(`Utilisateur enregistré : ${newUser.pseudo}`);
    }

    console.log('Utilisateurs enregistrés avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des utilisateurs :', error);
  } finally {
    mongoose.connection.close();
  }
};

createUsers();
