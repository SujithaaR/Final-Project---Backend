const express = require('express');
const { getQuizzesByCourseId } = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Route to get quizzes by course ID
router.get('/quizzes/course/:courseId',authMiddleware, getQuizzesByCourseId);

module.exports = router;

