require('dotenv').config();
const mongoose = require('mongoose');
const Type = require('../../models/ingredients/typesModel');
const connectDB = require('../../database/config');
const typeIngredientsData = require('../../../data/typeIngredientsData');


const createTypes = async () => {
  try {
    await connectDB();
    for (const type of typeIngredientsData) {
      const newType = new Type(type);
      await newType.save();
      console.log(`Enregistrement du type : ${newType.name}`);
    }
    console.log('Types enregistrés avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des types :', error);
  } finally {
    mongoose.connection.close();
  }
};

createTypes();