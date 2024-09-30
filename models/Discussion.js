const mongoose = require('mongoose');

const DiscussionSchema = new mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true }, // Reference to the quiz
    title: { type: String, required: true }, // Title of the discussion topic
    content: { type: String, required: true }, // Initial post content
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the discussion
}, { timestamps: true });

module.exports = mongoose.model('Discussion', DiscussionSchema);

