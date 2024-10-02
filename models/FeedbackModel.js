const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningMaterial', required: true }, // Reference to the course
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User giving feedback
    enrollmentId:{type:mongoose.Schema.Types.ObjectId,ref:'Enrollment',required:true},
    overallSatisfaction: { type: Number, min: 1, max: 5, required: true }, // Overall satisfaction rating from 1 to 5
    contentQuality: { type: Number, min: 1, max: 5, required: true }, // Rating for content quality
    instructorEffectiveness: { type: Number, min: 1, max: 5, required: true }, // Rating for instructor effectiveness
    comments: { type: String }, // Optional comments about the course
}, { timestamps: true });

module.exports = mongoose.model('CourseFeedback', FeedbackSchema);

