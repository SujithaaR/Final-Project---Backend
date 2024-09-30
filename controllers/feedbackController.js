const CourseFeedback = require('../models/Feedback');

// Create Feedback for a Course
exports.createFeedback = async (req, res) => {
    const { courseId, overallSatisfaction, contentQuality, instructorEffectiveness, comments } = req.body;
    const userId = req.user.id; // Assuming user ID is attached to req.user by authentication middleware

    try {
        const newFeedback = new CourseFeedback({
            courseId,
            userId,
            overallSatisfaction,
            contentQuality,
            instructorEffectiveness,
            comments,
        });

        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
    } catch (err) {
        res.status(400).json({ message: 'Failed to submit feedback', error: err.message });
    }
};

// Get All Feedback for a Course
exports.getFeedbackForCourse = async (req, res) => {
    const { courseId } = req.params;

    try {
        const feedback = await CourseFeedback.find({ courseId }).populate('userId', 'username'); // Populate userId to get usernames
        res.status(200).json(feedback);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve feedback', error: err.message });
    }
};
