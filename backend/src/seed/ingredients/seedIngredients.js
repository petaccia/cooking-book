require('dotenv').config();
const mongoose = require('mongoose');
const Ingredient = require('../../models/ingredients/ingredientModel');
const Type = require('../../models/ingredients/typesModel');
const Category = require('../../models/ingredients/categoriesModel');
const connectDB = require('../../database/config');
const ingredientsData = require('../../../data/ingredientsData');

const createIngredients = async () => {
  try {
    await connectDB();

    // Vider les collections
    await Ingredient.deleteMany({});
    await Type.deleteMany({});
    await Category.deleteMany({});
    console.log('Collections vidées');

    // Enregistrer les types
    const typesSet = new Set(ingredientsData.map(ingredient => ingredient.type));
    for (const type of typesSet) {
      const ingredientType = new Type({ name: type });
      await ingredientType.save();
    }
    console.log('Types enregistrés');

    // Enregistrer les catégories
    const categoriesSet = new Set(ingredientsData.map(ingredient => ingredient.category));
    for (const category of categoriesSet) {
      const ingredientCategory = new Category({ name: category });
      await ingredientCategory.save();
    }
    console.log('Catégories enregistrées');

    // Enregistrer les ingrédients
    for (const ingredient of ingredientsData) {
      // Trouver les ID des types et des catégories correspondants
      const ingredientType = await Type.findOne({ name: ingredient.type });
      const ingredientCategory = await Category.findOne({ name: ingredient.category });

      // Enregistrer l'ingrédient
      const newIngredient = new Ingredient({
        ...ingredient,
        // Ajouter l'ID des types et des catégories correspondants au nouvel ingrédient
        type: ingredientType._id,
        category: ingredientCategory._id,
      });
      await newIngredient.save();
    }
    console.log('Ingrédients enregistrés');

  } catch (error) {
    console.error("Erreur lors de l'enregistrement des ingrédients :", error);
  } finally {
    mongoose.connection.close();
  }
};

createIngredients();
