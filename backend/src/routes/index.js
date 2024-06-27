const router = require("express").Router();

const authRoutes = require("./authRoutes");
const recipesRoutes = require("./recipesRoutes");

router.use("/auth", authRoutes);
router.use("/recipes", recipesRoutes);

module.exports = router;