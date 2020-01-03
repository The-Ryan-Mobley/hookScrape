const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");
module.exports = {
    scrape: async (req, res) => {
        const modelLength = await db.ScrapedPost.count({});
        if(modelLength === 0){
            let response = await axios.get(req.query[0]);
            if (response) {
                let $ = cheerio.load(response.data);
                let counter = 0;
                $("div.thing").each(async (i, element) => {
                    let Title = $(element).children().find("a.title").text().toString();
                    let karma = $(element).children("div.unvoted").find(".unvoted").text();
                    let author = $(element).children().find(".author").text().toString();
                    let link = $(element).children().find(".may-blank").attr("href").toString();
                    let thumbnail = $(element).find("img").attr("src")
                    let discussion = $(element).find(".comments").attr("href");
                    if (!thumbnail) {
                        thumbnail = `/notfound.png`;
                    }
                    let item = {
                        Title,
                        link,
                        karma,
                        author,
                        thumbnail,
                        discussion,
                        subReddit: req.query[0]
                    };
                    try {
                        let result = await db.ScrapedPost.create(item);
                        if (result) {
                            if (counter === ($("div.thing").length - 1)) { //iterates over elements and performs callback when needed
                                res.sendStatus("200");
                            } else {
                                counter++;
                            }
                        } 
                    } catch {
                        if (counter === ($("div.thing").length - 1)) {
                            res.sendStatus("200");
                        } else {
                            counter++;
                        }
                    }
                });
            }
        }
    }
}