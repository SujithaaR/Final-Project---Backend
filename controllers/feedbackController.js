const CourseFeedback = require('../models/FeedbackModel');

// Create Feedback for a Course
exports.createFeedback = async (req, res) => {
    const {userId, courseId,enrollmentId, overallSatisfaction, contentQuality, instructorEffectiveness, comments } = req.body;
    // Ensure all required fields are present
    if (!userId || !enrollmentId || !courseId || overallSatisfaction == null || contentQuality == null || instructorEffectiveness == null) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        const newFeedback = new CourseFeedback({
            courseId,
            userId,
            enrollmentId,
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

