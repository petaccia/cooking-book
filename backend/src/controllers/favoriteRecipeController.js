const FavoriteRecipe = require('../models/favoriteRecipeModel');
const Recipe = require('../models/recipeModel'); 

// Ajouter une recette aux favoris
exports.addFavoriteRecipe = async (req, res) => {
  try {
    const { userId } = req.params;
    const { recipeId } = req.body;

    // Vérifier si la recette existe
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recette non trouvée" });
    }

    // Vérifier si la recette est déjà dans les favoris
    const existingFavorite = await FavoriteRecipe.findOne({ user: userId, recipe: recipeId });
    if (existingFavorite) {
      return res.status(400).json({ message: "Cette recette est déjà dans vos favoris" });
    }

    // Créer une nouvelle entrée favorite
    const newFavorite = new FavoriteRecipe({
      user: userId,
      recipe: recipeId
    });

    await newFavorite.save();

    // Récupérer la recette favorite avec les détails peuplés
    const populatedFavorite = await FavoriteRecipe.findById(newFavorite._id)
      .populate({
        path: 'recipe',
        populate: {
          path: 'ingredients.ingredientId',
          model: 'Ingredient',
          select: 'name image'
        }
      })
      .populate({
        path: 'recipe.author',
        model: 'User',
        select: 'pseudo'
      });

    res.status(201).json({ message: "Recette ajoutée aux favoris avec succès", favoriteRecipe: populatedFavorite });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout aux favoris", error: error.message });
  }
};

// Récupérer les recettes favorites
exports.getFavoriteRecipes = async (req, res) => {
  try {
    const { userId } = req.params;

    const favoriteRecipes = await FavoriteRecipe.find({ user: userId })
      .populate({
        path: 'recipe',
        populate: [
          {
            path: 'ingredients.ingredientId',
            model: 'Ingredient',
            select: 'name image'
          },
          {
            path: 'author',
            model: 'User',
            select: 'pseudo'
          }
        ]
      });

    res.status(200).json(favoriteRecipes);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des recettes favorites", error: error.message });
  }
};

// Supprimer une recette des favoris
exports.deleteFavoriteRecipe = async (req, res) => {
  try {
    const { userId, recipeId } = req.params;
    
    const result = await FavoriteRecipe.findOneAndDelete({ user: userId, recipe: recipeId });
    
    if (result) {
      res.status(200).json({ message: "Recette retirée des favoris avec succès" });
    } else {
      res.status(404).json({ message: "Recette favorite non trouvée" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression de la recette favorite", error: error.message });
  }
};
