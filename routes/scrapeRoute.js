const scraper = require("../scraper/redditScrape");
module.exports = (app) => {
    app.get("/scrape", (req, res) =>{
        console.log(`******************************************
                     *                SCRAPING                *
                     ******************************************`);
        scraper.scrape("https://old.reddit.com/r/todayilearned", result => {
            if( result === "200") {
                console.log(`******************************************
                             *                  DONE                  *
                             ******************************************`);
                res.sendStatus("200");
            }
        }); 
    });
}