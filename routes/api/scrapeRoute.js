const scraper = require("../../controller/redditScrape");
const router = require("express").Router();

router.route("/").get(scraper.scrape);
        
module.exports = router;