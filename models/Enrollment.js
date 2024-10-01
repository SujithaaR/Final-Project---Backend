const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    enrolledAt: { type: Date, default: Date.now },
    progress: { type: Number, default: 0 }, // Percentage of course completed
    completed: { type: Boolean, default: false }, // Course completion status
    timeSpent: { type: Number, default: 0 }, // Total time spent in seconds
    totalCount: { type: Number, default: 0 }, // Total number of subtopics in the course
    completedCount: { type: Number, default: 0 }, // Number of completed subtopics
    
    quizScores: [
        {
            quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
            score: { type: Number, required: true }, // Score the user achieved
            dateTaken: { type: Date, default: Date.now }, // When the quiz was taken
        },
    ],
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
