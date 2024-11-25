import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
const app = express();


// Import route handlers for different endpoints
import Patients from './routes/Patients.js';
import authStaff from './routes/Staff.js';
import refreshTokenRoute from './routes/refreshTokenRoute.js';
import logout from './routes/logout.js';
import bookAppointment from './routes/bookAppintment.js';
import forgotPassword from './routes/forgotPassword.js';

// Middleware to parse incoming JSON requests
app.use(express.json());

// Logger middleware for HTTP requests
app.use(morgan('common'));

// Register routes for patient and appointment-related operations
app.use('/api/v1', [Patients, bookAppointment]);

// Register routes for staff authentication, token refresh, and logout
app.use('/api/v1/auth', [authStaff, refreshTokenRoute, logout, forgotPassword]);

// Function to establish MongoDB connection using Mongoose

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to database...'));

// Start the Express server on the specified port
app.listen(process.env.PORT, () => {
  console.log('Server running on port http://localhost:5000/'); // Log server start message
});
