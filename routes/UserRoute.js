const express = require('express');
const router = express.Router();
const { register, login, getUserDetails, getAllUsers,updateTimeSpent } = require('../controllers/UserController');
const authMiddleware = require('../middleware/authMiddleware');

// User registration
router.post('/register', register);

// User login
router.post('/login', login);

// Get details of the authenticated user
router.get('/user', authMiddleware, getUserDetails);



router.put('/users/update-time',authMiddleware,updateTimeSpent)
module.exports = router;


