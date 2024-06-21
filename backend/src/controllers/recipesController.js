const recipes = require("../models/recipeModel");

const getRecipes = async (req, res) => {
  try {
    const recipesAll = await recipes.find();
    res.status(200).json(recipesAll);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await recipes.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
};



module.exports = { getRecipes , getRecipe };