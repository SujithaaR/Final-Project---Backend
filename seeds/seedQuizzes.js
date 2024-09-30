// seeds/seedQuizzes.js
const mongoose = require('mongoose');
const connectDB = require('../db'); // Adjust the path as necessary
const Course = require('../models/LearningMaterial');
const Quiz = require('../models/Quiz');

const quizzes = [
  {
    courseId: null, // This will be set dynamically
    title: "Web Development Bootcamp Quiz 1",
    description: "Test your knowledge on HTML.",
    questions: [
      {
        questionText: "What does HTML stand for?",
        questionType: "multiple-choice",
        options: ["Hypertext Markup Language", "High-Level Text Markup Language", "Hyperlink and Text Markup Language"],
        correctAnswer: "Hypertext Markup Language",
        points: 1,
      },
      {
        questionText: "Is CSS used for styling HTML?",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Web Development Bootcamp Quiz 2",
    description: "Test your knowledge on CSS.",
    questions: [
      {
        questionText: "What does CSS stand for?",
        questionType: "multiple-choice",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
        points: 1,
      },
      {
        questionText: "Can you style a webpage using JavaScript?",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Web Development Bootcamp Quiz 3",
    description: "Test your knowledge on JavaScript.",
    questions: [
      {
        questionText: "Which of the following is a JavaScript framework?",
        questionType: "multiple-choice",
        options: ["React", "Laravel", "Django"],
        correctAnswer: "React",
        points: 1,
      },
      {
        questionText: "True or False: JavaScript is a statically typed language.",
        questionType: "true-false",
        correctAnswer: "false",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Web Development Bootcamp Quiz 4",
    description: "Test your knowledge on Web APIs.",
    questions: [
      {
        questionText: "What is the purpose of the fetch API?",
        questionType: "multiple-choice",
        options: ["To make HTTP requests", "To create HTML elements", "To manipulate CSS styles"],
        correctAnswer: "To make HTTP requests",
        points: 1,
      },
      {
        questionText: "True or False: The DOM represents the structure of a web page.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Web Development Bootcamp Quiz 5",
    description: "Final quiz for the Web Development Bootcamp.",
    questions: [
      {
        questionText: "What does a <script> tag do in HTML?",
        questionType: "multiple-choice",
        options: ["Links to external scripts", "Runs JavaScript code", "Styles the webpage"],
        correctAnswer: "Runs JavaScript code",
        points: 1,
      },
      {
        questionText: "True or False: You can use jQuery to simplify DOM manipulation.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  // Quizzes for Data Science with Python
  {
    courseId: null, // This will be set dynamically
    title: "Data Science with Python Quiz 1",
    description: "Test your knowledge on Python basics.",
    questions: [
      {
        questionText: "What is the correct file extension for Python files?",
        questionType: "multiple-choice",
        options: [".py", ".python", ".pys"],
        correctAnswer: ".py",
        points: 1,
      },
      {
        questionText: "True or False: Python is a compiled language.",
        questionType: "true-false",
        correctAnswer: "false",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Data Science with Python Quiz 2",
    description: "Test your knowledge on data structures.",
    questions: [
      {
        questionText: "Which of the following is a mutable data type in Python?",
        questionType: "multiple-choice",
        options: ["List", "Tuple", "String"],
        correctAnswer: "List",
        points: 1,
      },
      {
        questionText: "True or False: A tuple can be changed after it is created.",
        questionType: "true-false",
        correctAnswer: "false",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Data Science with Python Quiz 3",
    description: "Test your knowledge on libraries.",
    questions: [
      {
        questionText: "Which library is used for data manipulation in Python?",
        questionType: "multiple-choice",
        options: ["Pandas", "NumPy", "Scikit-learn"],
        correctAnswer: "Pandas",
        points: 1,
      },
      {
        questionText: "True or False: Matplotlib is used for data visualization.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Data Science with Python Quiz 4",
    description: "Test your knowledge on machine learning basics.",
    questions: [
      {
        questionText: "What is the purpose of supervised learning?",
        questionType: "multiple-choice",
        options: ["To predict outcomes based on labeled data", "To group data without labels", "To generate new data"],
        correctAnswer: "To predict outcomes based on labeled data",
        points: 1,
      },
      {
        questionText: "True or False: In unsupervised learning, we use labeled datasets.",
        questionType: "true-false",
        correctAnswer: "false",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Data Science with Python Quiz 5",
    description: "Final quiz for Data Science with Python.",
    questions: [
      {
        questionText: "What does overfitting mean in machine learning?",
        questionType: "multiple-choice",
        options: ["Model performs well on training data but poorly on unseen data", "Model is too simple to capture the underlying data", "None of the above"],
        correctAnswer: "Model performs well on training data but poorly on unseen data",
        points: 1,
      },
      {
        questionText: "True or False: Cross-validation helps prevent overfitting.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },



  // Machine Learning Fundamentals Quizzes
  {
    courseId: null, // This will be set dynamically
    title: "Machine Learning Fundamentals Quiz 1",
    description: "Test your knowledge on basic machine learning concepts.",
    questions: [
      {
        questionText: "What is the goal of machine learning?",
        questionType: "multiple-choice",
        options: [
          "To create algorithms that can learn from data",
          "To manually code all behaviors",
          "To ensure all data is structured",
        ],
        correctAnswer: "To create algorithms that can learn from data",
        points: 1,
      },
      {
        questionText: "True or False: Machine learning is a subset of artificial intelligence.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Machine Learning Fundamentals Quiz 2",
    description: "Test your understanding of supervised learning.",
    questions: [
      {
        questionText: "Which of the following is a characteristic of supervised learning?",
        questionType: "multiple-choice",
        options: [
          "The model is trained on labeled data",
          "The model learns from feedback during training",
          "Both A and B",
        ],
        correctAnswer: "Both A and B",
        points: 1,
      },
      {
        questionText: "True or False: Supervised learning can only be used for classification tasks.",
        questionType: "true-false",
        correctAnswer: "false",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Machine Learning Fundamentals Quiz 3",
    description: "Assess your knowledge of unsupervised learning.",
    questions: [
      {
        questionText: "What is the primary objective of unsupervised learning?",
        questionType: "multiple-choice",
        options: [
          "To predict outcomes based on labeled data",
          "To find hidden patterns in unlabeled data",
          "To classify data into known categories",
        ],
        correctAnswer: "To find hidden patterns in unlabeled data",
        points: 1,
      },
      {
        questionText: "True or False: Clustering is an unsupervised learning technique.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Machine Learning Fundamentals Quiz 4",
    description: "Test your understanding of model evaluation.",
    questions: [
      {
        questionText: "Which metric is commonly used for evaluating classification models?",
        questionType: "multiple-choice",
        options: ["Accuracy", "MSE", "R-squared"],
        correctAnswer: "Accuracy",
        points: 1,
      },
      {
        questionText: "True or False: A confusion matrix provides insights into the performance of a classification model.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Machine Learning Fundamentals Quiz 5",
    description: "Final quiz for Machine Learning Fundamentals.",
    questions: [
      {
        questionText: "What is overfitting?",
        questionType: "multiple-choice",
        options: [
          "When a model generalizes well to unseen data",
          "When a model learns the training data too well, including noise",
          "When a model has high bias",
        ],
        correctAnswer: "When a model learns the training data too well, including noise",
        points: 1,
      },
      {
        questionText: "True or False: Regularization techniques help reduce overfitting.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },


  // Mobile App Development Quizzes
  {
    courseId: null, // This will be set dynamically
    title: "Mobile App Development Quiz 1",
    description: "Test your knowledge of mobile development frameworks.",
    questions: [
      {
        questionText: "Which framework is used for building native apps for iOS?",
        questionType: "multiple-choice",
        options: ["React Native", "Flutter", "Xamarin"],
        correctAnswer: "React Native",
        points: 1,
      },
      {
        questionText: "True or False: Android apps are primarily developed using Java.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Mobile App Development Quiz 2",
    description: "Assess your knowledge of Android components.",
    questions: [
      {
        questionText: "What is an Activity in Android?",
        questionType: "multiple-choice",
        options: [
          "A screen that the user interacts with",
          "A background service",
          "A layout file",
        ],
        correctAnswer: "A screen that the user interacts with",
        points: 1,
      },
      {
        questionText: "True or False: Fragments can be reused across different activities.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Mobile App Development Quiz 3",
    description: "Test your understanding of iOS development.",
    questions: [
      {
        questionText: "Which language is primarily used for iOS development?",
        questionType: "multiple-choice",
        options: ["Swift", "Kotlin", "C#"],
        correctAnswer: "Swift",
        points: 1,
      },
      {
        questionText: "True or False: UIKit is a framework used for building user interfaces in iOS.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Mobile App Development Quiz 4",
    description: "Assess your knowledge of cross-platform development.",
    questions: [
      {
        questionText: "Which framework allows developers to write code once and deploy on both iOS and Android?",
        questionType: "multiple-choice",
        options: ["React Native", "Swift", "Java"],
        correctAnswer: "React Native",
        points: 1,
      },
      {
        questionText: "True or False: Flutter uses Dart as its programming language.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
  {
    courseId: null, // This will be set dynamically
    title: "Mobile App Development Quiz 5",
    description: "Final quiz for Mobile App Development.",
    questions: [
      {
        questionText: "What is the purpose of an emulator in mobile app development?",
        questionType: "multiple-choice",
        options: [
          "To test the app on a real device",
          "To simulate mobile device behavior on a computer",
          "To compile the app's code",
        ],
        correctAnswer: "To simulate mobile device behavior on a computer",
        points: 1,
      },
      {
        questionText: "True or False: Push notifications are used to send messages to users even when the app is not running.",
        questionType: "true-false",
        correctAnswer: "true",
        points: 1,
      },
    ],
  },
];

const seedQuizzes = async () => {
  await connectDB(); // Ensure the database is connected
  try {
    // Clear existing quizzes
    await Quiz.deleteMany({});
    
    // Fetch courses to get their IDs
    const webDevCourse = await Course.findOne({ title: "Web Development Bootcamp" });
    const dataScienceCourse = await Course.findOne({ title: "Data Science with Python" });
    const MachineLearningFundamentals=await Course.findOne({title:"Machine Learning Fundamentals"})
    const mobileAppCourse=await Course.findOne({title:"Mobile App Development"})

    if (webDevCourse) {
      quizzes.slice(0, 5).forEach(quiz => quiz.courseId = webDevCourse._id); // Set courseId for Web Development quizzes
    }
    if (dataScienceCourse) {
      quizzes.slice(5, 10).forEach(quiz => quiz.courseId = dataScienceCourse._id); // Set courseId for Data Science quizzes
    }

    if (MachineLearningFundamentals) {
        quizzes.slice(10, 15).forEach(quiz => quiz.courseId = MachineLearningFundamentals._id); // Set courseId for Machine Learning quizzes
      }
      if (mobileAppCourse) {
        quizzes.slice(15, 20).forEach(quiz => quiz.courseId = mobileAppCourse._id); // Set courseId for Mobile App Development quizzes
      }

    // Insert quizzes into the database
    await Quiz.insertMany(quizzes);
    console.log("Quizzes seeded successfully!");
  } catch (error) {
    console.error("Error seeding quizzes:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
};

seedQuizzes();

