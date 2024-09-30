// seed.js
const connectDB = require('../db');
const Course = require('../models/LearningMaterial');

const courses = [
  {
    title: "Web Development Bootcamp",
    description: "A comprehensive bootcamp covering front-end and back-end web development.",
    topics: [
      {
        title: "HTML & CSS",
        subtopics: [
          {
            title: "Introduction to HTML",
            contents: [
              { content_type: "text", content: "Learn the basics of HTML." },
              { content_type: "video", content: "https://example.com/html-intro" },
            ],
          },
          {
            title: "CSS Fundamentals",
            contents: [
              { content_type: "text", content: "Understanding CSS selectors and properties." },
              { content_type: "quiz", content: "Quiz on CSS basics." },
            ],
          },
        ],
      },
      {
        title: "JavaScript",
        subtopics: [
          {
            title: "JavaScript Basics",
            contents: [
              { content_type: "text", content: "An overview of JavaScript syntax and features." },
              { content_type: "video", content: "https://example.com/js-basics" },
            ],
          },
          {
            title: "DOM Manipulation",
            contents: [
              { content_type: "text", content: "Learn how to manipulate the Document Object Model." },
              { content_type: "quiz", content: "Quiz on DOM manipulation." },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Data Science with Python",
    description: "An in-depth course on data analysis and machine learning using Python.",
    topics: [
      {
        title: "Python Basics",
        subtopics: [
          {
            title: "Python Syntax and Semantics",
            contents: [
              { content_type: "text", content: "Introduction to Python programming." },
              { content_type: "video", content: "https://example.com/python-basics" },
            ],
          },
          {
            title: "Data Structures in Python",
            contents: [
              { content_type: "text", content: "Exploring lists, tuples, and dictionaries." },
              { content_type: "quiz", content: "Quiz on Python data structures." },
            ],
          },
        ],
      },
      {
        title: "Machine Learning",
        subtopics: [
          {
            title: "Introduction to Machine Learning",
            contents: [
              { content_type: "text", content: "Basic concepts of machine learning." },
              { content_type: "video", content: "https://example.com/ml-intro" },
            ],
          },
          {
            title: "Supervised Learning",
            contents: [
              { content_type: "text", content: "Understanding supervised learning techniques." },
              { content_type: "quiz", content: "Quiz on supervised learning." },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Machine Learning Fundamentals",
    description: "A beginner-friendly course on the basics of machine learning and its applications.",
    topics: [
      {
        title: "Introduction to Machine Learning",
        subtopics: [
          {
            title: "What is Machine Learning?",
            contents: [
              { content_type: "text", content: "Overview of machine learning concepts." },
              { content_type: "video", content: "https://example.com/ml-overview" },
            ],
          },
          {
            title: "Types of Machine Learning",
            contents: [
              { content_type: "text", content: "Understanding supervised, unsupervised, and reinforcement learning." },
              { content_type: "quiz", content: "Quiz on types of machine learning." },
            ],
          },
        ],
      },
      {
        title: "Data Preprocessing",
        subtopics: [
          {
            title: "Data Cleaning Techniques",
            contents: [
              { content_type: "text", content: "How to clean and prepare data for analysis." },
              { content_type: "video", content: "https://example.com/data-cleaning" },
            ],
          },
          {
            title: "Feature Engineering",
            contents: [
              { content_type: "text", content: "Creating features for better model performance." },
              { content_type: "quiz", content: "Quiz on feature engineering." },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Learn to build mobile applications using React Native.",
    topics: [
      {
        title: "React Native Basics",
        subtopics: [
          {
            title: "Setting Up the Environment",
            contents: [
              { content_type: "text", content: "Guide to set up React Native environment." },
              { content_type: "video", content: "https://example.com/react-native-setup" },
            ],
          },
          {
            title: "Components and Styling",
            contents: [
              { content_type: "text", content: "Understanding React Native components and styling." },
              { content_type: "quiz", content: "Quiz on components and styling." },
            ],
          },
        ],
      },
      {
        title: "Building Real-World Applications",
        subtopics: [
          {
            title: "Navigation in React Native",
            contents: [
              { content_type: "text", content: "Learn about navigation libraries." },
              { content_type: "video", content: "https://example.com/react-native-navigation" },
            ],
          },
          {
            title: "State Management",
            contents: [
              { content_type: "text", content: "Understanding state management in React Native." },
              { content_type: "quiz", content: "Quiz on state management." },
            ],
          },
        ],
      },
    ],
  },
];

const seedDatabase = async () => {
  await connectDB(); // Ensure the database is connected
  try {
    await Course.deleteMany({}); // Clear existing data
    await Course.insertMany(courses); // Insert sample courses
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
};

seedDatabase();

