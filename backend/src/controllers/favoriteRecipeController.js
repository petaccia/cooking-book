const FavoriteRecipe = require("../models/favoriteRecipeModel");



exports.getFavoriteRecipes= async (req, res) => {
  try {
    const { userId } = req.params;
    const favoriteRecipes = await FavoriteRecipe.find({ user: userId })
      .populate("recipe")
    res.status(200).json(favoriteRecipes);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la recherche des recettes favorites", error: error.message });
  }
}



exports.addFavoriteRecipe = async (req, res) => {
  try {
    const { userId } = req.params;
    const { recipeId } = req.body;
    const favoriteRecipe = new FavoriteRecipe({
      user: userId,
      recipe: recipeId,
    });
    await favoriteRecipe.save();
    res.status(201).json({ message: "Recette enregistrée", favoriteRecipe });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'enregistrement de la recette", error: error.message });
  }
}