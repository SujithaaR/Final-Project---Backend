
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  topics: [
    {
      title: String,
      subtopics: [
        {
          title: String,
          contents: [
            {
              content_type: { type: String, enum: ['text', 'video', 'quiz'] },
              content: String,
            },
          ],
                // New field to track completion status
                completed: { type: Boolean, default: false },
        },
      ],
    },
  ],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
