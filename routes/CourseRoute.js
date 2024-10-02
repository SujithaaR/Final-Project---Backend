const express = require('express');
const authMiddleware=require('../middleware/authMiddleware')
const { getAllCourses, getCourseById } = require('../controllers/CourseController');
const router = express.Router();


// Route to get all courses
router.get('/courses',authMiddleware, getAllCourses);

// Route to get a course by ID
router.get('/courses/:courseId', authMiddleware,getCourseById);

module.exports = router;
