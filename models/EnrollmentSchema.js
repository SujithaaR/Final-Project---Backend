const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the employee
    learningMaterialId: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningMaterial', required: true }, // Reference to the learning material
    completed: { type: Boolean, default: false }, // Status of completion
    completionDate: { type: Date }, // Date when the course was completed
    enrollmentDate: { type: Date, default: Date.now } // Date when the employee enrolled in the course
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
