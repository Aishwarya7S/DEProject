const express = require("express");
const { submitFeedback, getFeedback, deleteFeedback } = require("../Controllers/FeedbackC");
const router = express.Router();

router.get('/',getFeedback);
router.post("/submit", submitFeedback);
router.delete("/delete/:id",deleteFeedback);

module.exports = router;
