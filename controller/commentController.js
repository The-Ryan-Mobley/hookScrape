const db = require("../models");
module.exports = {
    insertComment: async (req, res) => {
        console.log(req.body);
        const user = {
            userName: req.body.name,
            body: req.body.body,
            postId: req.body.postId
        };
        const result = await db.Comments.create(user);
        if(result){
            console.log("comment added");
            res.sendStatus("200");
        } else {
            res.sendStatus("404");
        }
    },
    getComments: async (req, res) => {
        console.log(req.params.id)
        const result = await db.Comments.find({postId: req.params.id});
        console.log(result);
        if(result) {
            res.json(result);
        } else {
            res.sendStatus("504");
        }

    },
}