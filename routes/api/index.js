const router = require("express").Router();
const scrapeRoutes = require("./scrapeRoute");
const postRoutes = require("./postRoutes");

router.use("/scrape", scrapeRoutes);
router.use("/postRoute", postRoutes);

module.exports = router;