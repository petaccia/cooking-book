require("dotenv").config();
const mongoose = require("mongoose");
const Recipe = require("../models/recipeModel");
const Ingredient = require("../models/ingredientModel");
const User = require("../models/userModel");
const connectDB = require("../database/config");
const recipesData = require("../../data/recipesData");


const createRecipes = async () => {
  try {
    connectDB();

    for (const recipe of recipesData) {
      const ingredientPromises = recipe.ingredients.map(async (ingredient) => {
        const foundIngredient = await Ingredient.findOne({ name: ingredient.name });
        if (foundIngredient) {
          return foundIngredient._id;
        } else {
          const newIngredient = new Ingredient({ name: ingredient.name });
          await newIngredient.save();
          return newIngredient._id;
        }
      });

      const ingredientIds = await Promise.all(ingredientPromises);

      const author = await User.findOne({ name: recipe.author });
      const authorId = author ? author._id : null;

      const newRecipe = new Recipe({
        title: recipe.title,
        description: recipe.description,
        image: recipe.image,
        tcookingTime: recipe.tcookingTime,
        level: recipe.level,
        ingredients: ingredientIds,
        steps: recipe.steps,
        author: authorId,
      });
      await newRecipe.save();
      console.log(`Enregistrement de la recette : ${newRecipe.title}`);
    }
    console.log('Recettes enregistrées avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des recettes :', error);
  } finally {
    mongoose.connection.close();
  }
};
createRecipes();