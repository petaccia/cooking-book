const mongoose = require("mongoose");

// schema pour les recettes
const recipeSchema = new mongoose.Schema({

  // champs du titre
  title: {
    type: String,
    required: true,
    trim: true, // supprimer les espaces avant et apres le titre
    unique: true, // le titre doit être unique
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
  tcookingTime: {
    type: Number,
    default: 0 //  valeur par défaut si aucune n'est fournie
  },

  // champs du niveau
  level: {
    type: String,
    default: "Facile" //  valeur par défaut si aucune n'est fournie
  },

  // champs des ingredients
  ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: "Ingredient"}],

  // champs des etapes
  steps: {
    type: String,
  },
  

  // champs de l'auteur
  author: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
},

{timestamps: true}); // ajouter la date et l'heure de la création et de la modification

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;