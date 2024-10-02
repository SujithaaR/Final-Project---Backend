const express = require('express');
const router = express.Router();
const { createFeedback, getFeedbackForCourse } = require('../controllers/FeedbackController');


// Route to give feedback on a course
router.post('/feedback/add',  createFeedback);


module.exports = router;
