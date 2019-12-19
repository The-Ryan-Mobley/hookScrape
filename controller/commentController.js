const db = require("../models");
module.exports = {
    insertComment: async (req, res) => {
        console.log(req.body);
    //    const result = await db.Comments.create({})
    },
    getComments: async (req, res) => {
        const result = await db.Comments.find({postId: req.params.id});
        if(result) {
            res.json(result);
        } else {
            res.sendStatus("504");
        }

    },
}