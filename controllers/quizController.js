const Quiz = require('../models/Quiz');

// Controller to get quizzes by course ID
const getQuizzesByCourseId = async (req, res) => {
    const { courseId } = req.params; // Get course ID from request parameters

    try {
        const quizzes = await Quiz.find({ courseId })
        return res.status(200).json(quizzes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching quizzes.' });
    }
};

module.exports = {
    getQuizzesByCourseId
};



