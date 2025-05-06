const express = require("express");
const router = express.Router();
const { createPost, getAllPosts, likePost, addComment, deletePost } = require("../Controllers/PostC");

router.post("/", createPost);
router.get("/", getAllPosts);
router.put("/like/likePost/:id", likePost);
router.put("/comment/addComment/:id", addComment);
router.delete("/deletePost/:id", deletePost);

module.exports = router;
