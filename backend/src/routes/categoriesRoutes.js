const router = require("express").Router();

const categoryIngredientController = require("../controllers/categoryIngredientsController");


router.get("/all", categoryIngredientController.getAllCategories);


module.exports = router;