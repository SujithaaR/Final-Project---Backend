const mongoose = require('mongoose');

const QuizAttemptSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the employee
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true }, // Reference to the quiz
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningMaterial', required: true }, // Reference to the course
    pointsEarned: { type: Number, required: true }, // Total points earned in the quiz
    completedAt: { type: Date, default: Date.now }, // Timestamp for when the quiz was completed
}, { timestamps: true });

module.exports = mongoose.model('QuizAttempt', QuizAttemptSchema);

