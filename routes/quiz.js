const express = require('express');
const { getQuizzesByCourseId } = require('../controllers/quizController');
const router = express.Router();

// Route to get quizzes by course ID
router.get('/quizzes/course/:courseId', getQuizzesByCourseId);

module.exports = router;

