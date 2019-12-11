const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../db");
module.exports = {
    scrape: async (url, callback) => {
        let response = await axios.get(url);
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
                    thumbnail = `/assets/images/notfound.png`;
                }

                let item = {
                    Title,
                    link,
                    karma,
                    author,
                    thumbnail,
                    discussion
                };
                try {
                    let result = await db.ScrapedPost.create(item);
                    if (result) {
                        if (counter === ($("div.thing").length - 1)) { //iterates over elements and performs callback when needed
                            callback("200");
                        } else {
                            counter++;
                        }

                    } 
                } catch {
                    if (counter === ($("div.thing").length - 1)) {
                        callback("200");
                    } else {
                        counter++;
                    }
                }


            });
        }
    }
}