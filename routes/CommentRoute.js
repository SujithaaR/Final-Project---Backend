const express = require('express');
const router = express.Router();
const {
    addComment,
    getComments,
} = require('../controllers/CommentController');

// Route to add a new comment
router.post('/addcomments', addComment);

// Route to get all comments for a specific course
router.get('/comment/:courseId', getComments);


module.exports = router;


