const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
  const {
    username,
    password,
    email,
    isAdmin = false,
    department,
    team,
  } = req.body;

  // Validate input
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Username, password, and email are required" });
  }

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
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
      team,
    });

    // Save the new user to the database
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    return res
      .status(500)
      .json({ message: "Registration failed", error: err.message });
  }
};

// Login user
exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        isAdmin: user.isAdmin,
        department: user.department,
        team: user.team,
      },
    });
  } catch (err) {
    console.error("Error logging in:", err);
    return res
      .status(500)
      .json({ message: "Login failed", error: err.message });
  }
};

// Get user details
exports.getUserDetails = async (req, res) => {
  const userId = req.user._id; // Get user ID from authenticated request

  try {
    const user = await User.findById(userId).select("-password"); // Exclude password from the response

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Return selected user details
    return res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      department: user.department,
      team: user.team,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res
      .status(500)
      .json({ message: "Error fetching user details.", error });
  }
};
// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude password from the response
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Error fetching users.", error });
  }
};
exports.updateTimeSpent = async (req, res) => {
  const { sessionDuration } = req.body;

    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the sessionDuration is a valid number
        if (typeof sessionDuration !== 'number') {
            return res.status(400).json({ message: 'Invalid session duration' });
        }

        user.timeSpent = (user.timeSpent || 0) + sessionDuration; // Increment time spent
        await user.save();

        res.status(200).json({ message: 'Time updated successfully' });
    } catch (error) {
        console.error("Error updating time spent:", error);
        res.status(500).json({ message: 'Server error' });
    }
};