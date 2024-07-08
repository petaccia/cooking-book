const router = require("express").Router();

const authRoutes = require("./authRoutes");
const recipesRoutes = require("./recipesRoutes");
const ingredientRoutes = require("./ingredientRoutes");
const categoryRoutes = require("./categoriesRoutes");
const typesRoutes = require("./typeRoutes");

router.use("/auth", authRoutes);
router.use("/recipes", recipesRoutes);
router.use("/ingredients", ingredientRoutes);
router.use("/category", categoryRoutes);
router.use("/types", typesRoutes);

module.exports = router;