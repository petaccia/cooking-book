const mongoose = require("mongoose");

// schema pour les recettes
const recipeSchema = new mongoose.Schema({

  // champs du titre
  title: {
    type: String,
    required: true,
  },

  // champs de la description
  description: {
    type: String,
  },

  // champs de l'image
  image: {
    type: String,
  },

  // champs du temps
  time: {
    type: Number,
  },

  // champs du niveau
  level: {
    type: String,
  },

  // champs des ingredients
  ingredients: {type: mongoose.Schema.Types.ObjectId, ref: "Ingredient"},

  // champs des etapes
  steps: {
    type: String,
  },
  

  // champs de l'auteur
  author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;