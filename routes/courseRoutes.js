const express = require('express');
const router = express.Router();
const { enrollUser, getEnrollmentDetails,updateCourseProgress,submitQuizAnswers ,getEnrolledCourses} = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to enroll a user in a course
router.post('/enroll',authMiddleware, enrollUser);

// Route to get all enrolled courses for a user
// router.get('/enrolled', authMiddleware, getEnrolledCourses);
// Route to get enrolled courses
router.get('/enrolled-courses', authMiddleware, getEnrolledCourses);

// Route to get enrollment details
router.get('/enrollments/:enrollmentId', getEnrollmentDetails);
// Route to update course progress
router.put('/progress/update',authMiddleware, updateCourseProgress);

// Route to submit quiz answers and get score
router.post('/quiz/submit', submitQuizAnswers);

module.exports = router;
