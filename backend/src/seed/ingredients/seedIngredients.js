require('dotenv').config();
const mongoose = require('mongoose');
const Ingredient = require('../../models/ingredientModel');
const connectDB = require('../../database/config');
const ingredientsData = require('../../../data/ingredientsData');


const createIngredients = async () => {
  try {
    await connectDB();
    for (const ingredient of ingredientsData) {
      const newIngredient = new Ingredient(ingredient);
      await newIngredient.save();
      console.log(`Enregistrement de l'ingrédient : ${newIngredient.name}`);
    }
    console.log('Ingrédients enregistrées avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des ingrédients :', error);
  } finally {
    mongoose.connection.close();
  }
};

createIngredients();