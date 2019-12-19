const commentController = require("../../controller/commentController");
const router = require("express").Router();

router.route("/:id").get(commentController.getComments);
router.route("/new").post(commentController.insertComment);


module.exports = router;