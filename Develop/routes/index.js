const router = require("express").Router();

// Import category routes
const categoryRoutes = require("./api/category-routes");
router.use("/categories", categoryRoutes);

// Import product routes
const productRoutes = require("./api/product-routes");
router.use("/products", productRoutes);

// Import tag routes
const tagRoutes = require("./api/tag-routes");
router.use("/tags", tagRoutes);

// Default route for invalid routes
router.use((req, res) => {
  res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;
