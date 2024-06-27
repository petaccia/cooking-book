const mongoose = require("mongoose");


const favoriteRecipeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
  },
});

const FavoriteRecipe = mongoose.model("FavoriteRecipe", favoriteRecipeSchema);

module.exports = FavoriteRecipe;