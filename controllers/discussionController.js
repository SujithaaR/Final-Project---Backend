const Discussion = require('../models/Discussion');

// Function to create a Discussion
const createDiscussion = async (req, res) => {
    const { quizId, title, content } = req.body;

    try {
        const newDiscussion = new Discussion({
            quizId,
            title,
            content,
            createdBy: req.user.id, // Assuming user ID is stored in req.user
        });
        await newDiscussion.save();
        res.status(201).json({ message: 'Discussion created successfully', discussion: newDiscussion });
    } catch (err) {
        res.status(400).json({ message: 'Failed to create discussion', error: err.message });
    }
};

// Function to get Discussions by Quiz ID
const getDiscussionsByQuizId = async (req, res) => {
    const { quizId } = req.params;

    try {
        const discussions = await Discussion.find({ quizId }).populate('createdBy', 'username');
        res.json(discussions);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve discussions', error: err.message });
    }
};

// Export the functions
module.exports = {
    createDiscussion,
    getDiscussionsByQuizId,
};


