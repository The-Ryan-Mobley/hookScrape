const db = require("../models");

module.exports = {
    getPost: async (req, res) => {
        const result = await db.ScrapedPost.find({subReddit : req.query[0]});
        if(result) {
            res.json(result);

        } else {
            res.sendStatus("504");
        }
    }
}