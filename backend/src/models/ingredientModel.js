const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
  },

  unit: {
    type: String,
  },

  image: {
    type: String,
  },

  category: {
    type: String,
  },

  type: {
    type: String,
  },

});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;