const express = require('express');
const router = express.Router();
const { createDiscussion,getDiscussionsByQuizId } = require('../controllers/discussionController');
const authMiddleware = require('../middleware/authMiddleware');


// POST route to create a discussion
router.post('/creatediscussion',authMiddleware, createDiscussion);

// GET route to get discussions by material
router.get('/quiz/:quizId', getDiscussionsByQuizId);

module.exports = router;

