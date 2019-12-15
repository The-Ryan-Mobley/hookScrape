const router = require("express").Router();
const scrapeRoutes = require("./scrapeRoute");

router.use("/scrape", scrapeRoutes);

module.exports = router;