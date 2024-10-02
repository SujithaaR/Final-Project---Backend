const express = require('express');
const router = express.Router();
const { register, login, getUserDetails, getAllUsers } = require('../controllers/UserController');
const authMiddleware = require('../middleware/authMiddleware');

// User registration
router.post('/register', register);

// User login
router.post('/login', login);

// Get details of the authenticated user
router.get('/user', authMiddleware, getUserDetails);

// Get all users
router.get('/users', authMiddleware, getAllUsers); // Added route to get all users

module.exports = router;


