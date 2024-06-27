// routes des recettes
const router = require("express").Router();
const recipesController = require("../controllers/recipesController");
const favoriteRecipeController = require("../controllers/favoriteRecipeController");

router.get("/", recipesController.getRecipes);
router.get("/", favoriteRecipeController.getFavoriteRecipes);
router.get("/:id", recipesController.getRecipeById);
router.post("/",favoriteRecipeController.addRecipe);


module.exports = router;