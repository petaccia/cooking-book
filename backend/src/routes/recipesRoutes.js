// routes des recettes
const router = require("express").Router();
const recipesController = require("../controllers/recipesController");
const favoriteRecipeController = require("../controllers/favoriteRecipeController");
const { authMiddleware } = require("../middleware/authMiddleware");

// routes publiques
router.get("/", recipesController.getRecipes);

// routes privées
router.get("/favorites/:userId", favoriteRecipeController.getFavoriteRecipes);
router.get("/:id", recipesController.getRecipeById);
router.post("/add/:userId", authMiddleware, recipesController.createRecipe);
router.post("/favorites/:userId",favoriteRecipeController.addFavoriteRecipe);
router.delete("/favorites/:userId/:recipeId",favoriteRecipeController.deleteFavoriteRecipe);


module.exports = router;