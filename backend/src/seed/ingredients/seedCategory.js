require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('../../models/categoriesModel');
const connectDB = require('../../database/config');
const categoriesData = require('../../../data/categoryIngredientsData');

const createCategory = async () => {
  try {
    connectDB();
    for (const category of categoriesData) {
      const newCategory = new Category(category);
      await newCategory.save();
      console.log(`Enregistrement de la catégorie : ${newCategory.name}`);
    }
    console.log('Catégories enregistrées avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des catégories :', error);
  } finally {
    mongoose.connection.close();
  }
};


createCategory();