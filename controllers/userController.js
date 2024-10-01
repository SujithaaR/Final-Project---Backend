const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
    const { username, password, email, isAdmin, department, team } = req.body;

    // Validate input
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Username, password, and email are required' });
    }

    try {
        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            isAdmin,
            department,
            team
        });

        // Save the new user to the database
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Registration failed', error: err.message });
    }
};
// Login user
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin },process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, username: user.username, isAdmin: user.isAdmin } });
    } catch (err) {
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
};

exports.getUserDetails = async (req, res) => {
    const userId = req.user._id; // Get user ID from authenticated request
   
    try {
        const user = await User.findById(userId);
      
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        // Return selected user details
        return res.status(200).json({
            name: user.username,
            email: user.email,
            department: user.department,
            team: user.team,
            isAdmin: user.isAdmin,
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        return res.status(500).json({ message: 'Error fetching user details.', error });
    }
};


