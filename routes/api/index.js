const router = require("express").Router();
const scrapeRoutes = require("./scrapeRoute");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/scrape", scrapeRoutes);
router.use("/postRoute", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;