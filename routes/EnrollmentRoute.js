const express = require('express');
const router = express.Router();
const { enrollUser, getEnrollmentDetails,updateCourseProgress,getEnrolledCourses} = require('../controllers/EnrollmentController');
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


module.exports = router;
