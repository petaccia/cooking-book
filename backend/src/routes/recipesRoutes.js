// routes des recettes
const router = require("express").Router();
const recipesController = require("../controllers/recipesController");

router.get("/", recipesController.getRecipes);
router.get("/:id", recipesController.getRecipeById);


module.exports = router;