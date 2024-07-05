const router = require("express").Router();

const authRoutes = require("./authRoutes");
const recipesRoutes = require("./recipesRoutes");
const ingredientRoutes = require("./ingredientRoutes");

router.use("/auth", authRoutes);
router.use("/recipes", recipesRoutes);
router.use("/ingredients", ingredientRoutes);

module.exports = router;