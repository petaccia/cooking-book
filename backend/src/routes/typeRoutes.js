const router = require("express").Router();
const typeIngredientsController = require("../controllers/typeIngredientsController");


router.get("/all", typeIngredientsController.getAllTypes);

module.exports = router;