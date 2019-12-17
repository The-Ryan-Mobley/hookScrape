const postController = require("../../controller/postController");
const router = require("express").Router();

router.route("/posts").get(postController.getPost);

module.exports = router;