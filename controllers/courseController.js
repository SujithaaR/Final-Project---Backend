const Enrollment = require('../models/Enrollment');
const Course = require('../models/LearningMaterial');
const Quiz = require('../models/Quiz');
const mongoose = require('mongoose');

// Enroll a user in a course
const enrollUser = async (req, res) => {
    const { userId, courseId } = req.body;

    if (!userId || !courseId) {
        return res.status(400).json({ message: 'User ID and Course ID are required.' });
    }
    
    try {
        // Check if the user is already enrolled in the course
        const existingEnrollment = await Enrollment.findOne({ userId, courseId });
        
        if (existingEnrollment) {
            return res.status(400).json({ message: 'User is already enrolled in this course.' });
        }

        // Fetch course details to calculate total subtopics
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found.' });
        }

        // Calculate total count of subtopics
        const totalCount = course.topics.reduce((acc, topic) => acc + topic.subtopics.length, 0);

        // Create a new enrollment
        const enrollment = new Enrollment({
            userId,
            courseId,
            totalCount, // Set total count of subtopics
            completedCount: 0, // Initialize completed count to 0
        });

        await enrollment.save();
        return res.status(201).json({ message: 'User enrolled successfully', enrollment });
    } catch (error) {
        console.error('Error enrolling user:', error);
        return res.status(500).json({ message: 'Error enrolling user', error: error.message });
    }
};


// Get all enrolled courses for a user
const getEnrolledCourses = async (req, res) => {
       const userId = req.user ; // User ID from the authenticated request
    try {
        // Find all enrollments for the user
        const enrollments = await Enrollment.find({ userId }).populate('courseId'); // Populate course details

        // If no enrollments found, return a message
        if (!enrollments.length) {
            return res.status(404).json({ message: 'No enrolled courses found for this user.' });
        }

        // Return the enrolled courses along with their details
        return res.status(200).json(enrollments);
    } catch (error) {
        console.error("Error fetching enrolled courses:", error);
        return res.status(500).json({ message: 'Error fetching enrolled courses.', error });
    }
};


// Update course progress
const updateCourseProgress = async (req, res) => {
    const { enrollmentId, completedContentCount, totalContentCount, timeSpent } = req.body;

    try {
        // Validate input
        if (!enrollmentId || !mongoose.Types.ObjectId.isValid(enrollmentId)) {
            return res.status(400).json({ message: 'Invalid enrollment ID' });
        }
        if (typeof completedContentCount !== 'number' || completedContentCount < 0) {
            return res.status(400).json({ message: 'Completed content count must be a non-negative number.' });
        }
        if (typeof totalContentCount !== 'number' || totalContentCount <= 0) {
            return res.status(400).json({ message: 'Total content count must be greater than zero.' });
        }
        if (typeof timeSpent !== 'number' || timeSpent < 0) {
            return res.status(400).json({ message: 'Time spent must be a non-negative number.' });
        }

        // Calculate progress as a percentage
        const progress = (completedContentCount / totalContentCount) * 100;
        const completed = progress >= 100;

        // Update enrollment in a single database call
        const enrollment = await Enrollment.findByIdAndUpdate(
            enrollmentId,
            {
                $inc: { timeSpent }, // Increment total time spent
                progress: Math.min(progress, 100), // Ensure progress does not exceed 100%
                completed, // Set completion status
                totalCount: totalContentCount, // Update total content count
                completedCount: completedContentCount, // Update completed content count
            },
            { new: true, runValidators: true }
        );

        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found.' });
        }

        return res.status(200).json({ message: 'Course progress updated', enrollment });
    } catch (error) {
        console.error('Error updating progress:', error);
        return res.status(500).json({ message: 'Error updating progress', error: error.message });
    }
};


// Fetch enrollment details
const getEnrollmentDetails = async (req, res) => {
    const { enrollmentId } = req.params;
    console.log(enrollmentId);

    try {
        const enrollment = await Enrollment.findById(enrollmentId)
            .populate('userId') // Populate user details if necessary
            .populate('courseId') // Populate course details if necessary
            .lean(); // Use lean to get a plain JavaScript object

        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }

        return res.status(200).json(enrollment);
    } catch (error) {
        console.error('Error fetching enrollment details:', error);
        return res.status(500).json({ message: 'Error fetching enrollment details', error: error.message });
    }
};


const submitQuizAnswers = async (req, res) => {
    const { enrollmentId, quizId, answers } = req.body;

    try {
        // Find the quiz
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        // Calculate the score
        let score = 0;
        answers.forEach(answer => {
            const question = quiz.questions.find(q => q._id.toString() === answer.questionId);
            if (question && question.correctAnswer === answer.selectedAnswer) {
                score += question.points; // Add points for each correct answer
            }
        });

        // Find the enrollment and update quiz scores
        const enrollment = await Enrollment.findById(enrollmentId);
        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }

        // Add the new score to the quizScores array
        enrollment.quizScores.push({ quizId, score });
        await enrollment.save();

        return res.status(200).json({ message: 'Quiz score submitted successfully', score });
    } catch (error) {
        return res.status(500).json({ message: 'Error submitting quiz answers', error });
    }
};

module.exports = { enrollUser, updateCourseProgress,getEnrollmentDetails,submitQuizAnswers ,getEnrolledCourses};
