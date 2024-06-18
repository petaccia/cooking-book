// routes des recettes
const router = require("express").Router();
const recipesController = require("../controllers/recipesController");

router.get("/", recipesController.getRecipes);


module.exports = router;