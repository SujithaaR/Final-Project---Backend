const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningMaterial', required: true }, // Reference to the course
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User giving feedback
    overallSatisfaction: { type: Number, min: 1, max: 5, required: true }, // Overall satisfaction rating from 1 to 5
    contentQuality: { type: Number, min: 1, max: 5, required: true }, // Rating for content quality
    instructorEffectiveness: { type: Number, min: 1, max: 5, required: true }, // Rating for instructor effectiveness
    comments: { type: String }, // Optional comments about the course
    createdAt: { type: Date, default: Date.now } // Timestamp for feedback submission
}, { timestamps: true });

module.exports = mongoose.model('CourseFeedback', FeedbackSchema);

