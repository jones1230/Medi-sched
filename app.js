const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');

// Import route handlers for different endpoints
const Patients = require('./routes/Patients');
const authStaff = require('./routes/Staff');
const refreshTokenRoute = require('./routes/refreshTokenRoute');
const logout = require('./routes/logout');
const bookAppointment = require('./routes/bookAppintment');

// Middleware to parse incoming JSON requests
app.use(express.json());

// Load environment variables from .env file
dotenv.config();

// Logger middleware for HTTP requests
app.use(morgan('common'));

// Register routes for patient and appointment-related operations
app.use('/api', [Patients, bookAppointment]);

// Register routes for staff authentication, token refresh, and logout
app.use('/api/auth', [authStaff, refreshTokenRoute, logout]);

// Function to establish MongoDB connection using Mongoose
mongodb_connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI); // Connect to MongoDB with the URI from environment variables
};

// Connect to MongoDB and log success message if connected
mongodb_connect().then(() => {
  console.log('Database is connected');
});

// Start the Express server on the specified port
app.listen(process.env.PORT, () => {
  console.log('Server running on port http://localhost:5000/'); // Log server start message
});
