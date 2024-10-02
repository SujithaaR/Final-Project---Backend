// routes/comments.js

const express = require('express');
const router = express.Router();
const {
    addComment,
    getComments,
    updateComment,
    deleteComment,
} = require('../controllers/CommentController');

// Route to add a new comment
router.post('/addcomments', addComment);

// Route to get all comments for a specific course
router.get('/comment/:courseId', getComments);

// Route to update a comment by ID
router.put('/comment/:commentId', updateComment);

// Route to delete a comment by ID
router.delete('/comment/:commentId', deleteComment);

module.exports = router;


