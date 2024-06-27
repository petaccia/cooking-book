// routes des recettes
const router = require("express").Router();
const recipesController = require("../controllers/recipesController");
const favoriteRecipeController = require("../controllers/favoriteRecipeController");

// routes publiques
router.get("/", recipesController.getRecipes);

// routes privées
router.get("/favorites/:userId", favoriteRecipeController.getFavoriteRecipes);
router.get("/:id", recipesController.getRecipeById);
router.post("/favorites/:userId",favoriteRecipeController.addFavoriteRecipe);


module.exports = router;