const express = require('express');
const router = express.Router();
const { register, login,getUserDetails } = require('../controllers/userController');
const authMiddleware=require('../middleware/authMiddleware')

router.post('/register', register);
router.post('/login', login);
router.get('/user',authMiddleware,getUserDetails)
module.exports = router;

