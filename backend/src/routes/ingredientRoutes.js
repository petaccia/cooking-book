const router = require("express").Router();
const ingredientsController = require("../controllers/ingredientController");

router.get("/all", ingredientsController.getAllIngredients);


module.exports = router