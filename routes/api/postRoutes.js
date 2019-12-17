const postController = require("../../controller/postController");
const router = require("express").Router();

router.route("/").get(postController.getPost);

module.exports = router;