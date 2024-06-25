const Recipes = require("../models/recipeModel");
const Ingredients = require("../models/ingredientModel");


exports.getRecipes = async (req, res) => {
  try {
    const recipesAll = await Recipes.find();
    res.status(200).json(recipesAll);
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id)
      .populate('ingredients')
      .populate('author', 'username'); // Nous gardons la population de l'auteur

    if (!recipe) {
      return res.status(404).json({ message: "Recette non trouvée" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération de la recette", error: error.message });
  }
};


