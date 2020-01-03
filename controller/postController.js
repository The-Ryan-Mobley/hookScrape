const db = require("../models");

module.exports = {
    getPost: async (req, res) => {
        const result = await db.ScrapedPost.find({subReddit : req.query[0]});
        if(result) {
            res.json(result);

        } else {
            res.sendStatus("504");
        }
    },
    threadPost: async (req, res) => {
        console.log(req.params.id)
        const result = await db.ScrapedPost.find({id: req.params.id});
        if(result) {
            res.json(result);
        } else {
            res.sendStatus("504");
        }

    }
}