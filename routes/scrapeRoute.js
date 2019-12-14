const scraper = require("../controller/redditScrape");
const router = require("express").Router();
module.exports = (app) => {
    router.route("/scrape").post(scraper.scrape);
        
}