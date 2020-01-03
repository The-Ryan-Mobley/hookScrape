const postController = require("../../controller/postController");
const router = require("express").Router();

router.route("/").get(postController.getPost);
router.route("/find/:id").get(postController.threadPost);

module.exports = router;