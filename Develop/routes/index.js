const router = require("express").Router();
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

// Default route for invalid routes
router.use((req, res) => {
  res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;
