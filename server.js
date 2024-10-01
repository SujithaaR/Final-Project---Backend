require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const learningMaterials=require('./routes/learningMaterial');
const quiz=require('./routes/quiz');
const discussion=require('./routes/discussion')
const feedback=require('./routes/feedback')
const courseRoutes=require('./routes/courseRoutes');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware for all origins and all methods
app.use(cors());

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the authentication routes
app.use('/api', userRoutes);
app.use('/api', learningMaterials);
app.use('/api', quiz);
app.use('/api',discussion)
app.use('/api',feedback)
app.use('/api',courseRoutes)


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
