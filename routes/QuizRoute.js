
 
const express = require('express');
const router = express.Router();
const  QuizResultRouter  = require('../controllers/QuizController');

// POST /api/quiz/submit-quiz
router.post('/quiz/submit-quiz', QuizResultRouter.submitQuiz);


// Route to fetch previous quiz results
router.get('/quiz/results', QuizResultRouter.getQuizResults);

module.exports = router;



