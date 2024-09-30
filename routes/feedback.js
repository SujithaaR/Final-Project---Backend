const express = require('express');
const router = express.Router();
const { createFeedback, getFeedbackForCourse } = require('../controllers/feedbackController');
const authMiddleware  = require('../middleware/authMiddleware');

// Route to give feedback on a course
router.post('/feedback', authMiddleware, createFeedback);

// Route to get all feedback for a specific course
router.get('/feedback/:courseId', authMiddleware, getFeedbackForCourse);

module.exports = router;
