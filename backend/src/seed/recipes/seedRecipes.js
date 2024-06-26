require('dotenv').config();
const mongoose = require('mongoose');
const Ingredient = require('../../models/ingredientModel');
const connectDB = require('../../database/config');
const recipesData = require('../../../data/recipesData');
const Recipe = require('../../models/recipeModel');
const User = require('../../models/userModel');

const createRecipes = async () => {
  try {
    await connectDB();

    // Récupérer tous les ingrédients existants
    const existIngredients = await Ingredient.find();

    // Créer un map pour trouver rapidement les ingrédients par leur nom
    const ingredientMap = new Map();
    existIngredients.forEach((ingredient) => {
      ingredientMap.set(ingredient.name, ingredient._id);
    });

    for (const recipe of recipesData) {
      console.log(`Traitement de la recette : ${recipe.title}`);
      console.log(`Ingrédients avant transformation : ${JSON.stringify(recipe.ingredients, null, 2)}`);

      // Transformer les ingrédients pour inclure leur quantité et leur ID
      const transformedIngredients = recipe.ingredients.map((ingredient) => {
        const ingredientId = ingredientMap.get(ingredient.name);
        if (!ingredientId) {
          throw new Error(`Ingrédient non trouvé : ${ingredient.name}`);
        }
        console.log(`Ingrédient trouvé : ${ingredient.name}, ID : ${ingredientId}`);
        return {
          ingredientId: ingredientId,
          quantity: ingredient.quantity
        };
      });

      // Trouver l'auteur dans la base de données par nom
      const user = await User.findOne({ name: recipe.author });
      if (!user) {
        throw new Error(`Auteur non trouvé : ${recipe.author}`);
      }
      console.log(`Auteur trouvé : ${user.name}, ID : ${user._id}`);

      // Utiliser l'ID de l'auteur directement
      const authorId = user._id;

      const newRecipe = new Recipe({
        title: recipe.title,
        description: recipe.description,
        image: recipe.image,
        cookingTime: recipe.tcookingTime,
        level: recipe.level,
        ingredients: transformedIngredients,
        steps: recipe.steps,
        author: authorId
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
