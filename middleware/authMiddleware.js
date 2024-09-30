const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    try {
        // Verify token using the secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user data to request object
        next(); // Call next middleware or route handler
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid', error: err.message });
    }
};

module.exports = authMiddleware; // No need for curly braces since it's a single export

