const db = require("../models");

module.exports = {
    getPost: async (req, res) => {
        console.log("ayyyyy");
        console.log(req.query[0]);
        const result = await db.ScrapedPost.find({subReddit : req.query[0]});
        if(result) {
            res.json(result);

        } else {
            res.sendStatus("504");
        }
    }
}