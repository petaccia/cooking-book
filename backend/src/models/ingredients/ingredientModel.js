const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  image: {
    type: String,
  },

  category:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  }],

  type: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Type",
  }],

});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;