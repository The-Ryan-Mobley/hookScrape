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
        console.log("OOOOOOOOOOOOOOOOOHHHHHHHHHHHHHHHHHHHH SNAAAAAAAAAAAAAAAAAAP");
        console.log(req.params.id)
        const result = await db.ScrapedPost.find({_id: req.params.id});
        if(result) {
            console.log(result);
            res.json(result);
        } else {
            res.sendStatus("504");
        }

    }
}