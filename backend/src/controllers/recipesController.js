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
    const id = req.params.id;
    const recipe = await Recipes.findById(id)
    .select("-__v") // Supprimer le champ __v de la réponse
      .populate('ingredients') // Remplacer les ID des ingrédients par les objets correspondants
      .populate('author', 'username'); 

    if (!recipe) {
      return res.status(404).json({ message: "Recette non trouvée" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération de la recette", error: error.message });
  }
};


