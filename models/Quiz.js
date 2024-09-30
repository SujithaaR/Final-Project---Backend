// const mongoose = require('mongoose');

// const QuestionSchema = new mongoose.Schema({
//     questionText: { type: String, required: true },
//     questionType: {
//         type: String,
//         enum: ['multiple-choice', 'true-false', 'short-answer', 'essay'],
//         required: true
//     },
//     options: [{ type: String }], // Array of options for multiple-choice questions
//     correctAnswer: { type: String, required: true }, // Correct answer or criteria for grading
//     points: { type: Number, default: 1 } // Points for each question
// }, { _id: false }); // Disable auto-generating an ID for subdocuments

// const QuizSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String },
//     instructions: { type: String },
//     questions: [QuestionSchema], // Array of questions
//     timeLimit: { type: Number }, // Time limit in minutes
//     createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// }, { timestamps: true });

// module.exports = mongoose.model('Quiz', QuizSchema);

// models/Quiz.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  questionType: {
    type: String,
    enum: ['multiple-choice', 'true-false', 'short-answer', 'essay'],
    required: true,
  },
  options: [{ type: String }], // For multiple-choice questions
  correctAnswer: { type: String, required: true },
  points: { type: Number, default: 1 },
});

const quizSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  description: { type: String },
  questions: [questionSchema],
}, { timestamps: true });

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
