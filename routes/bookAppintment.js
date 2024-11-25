import express from 'express';
import { allAppointments, oneAppointment } from '../controllers/getAppointments.js';
import createAppointment from '../controllers/postAppointment.js'; // Import controller function to create a new appointment
import deleteAppointment from '../controllers/deleteAppointment.js'; // Import controller function to delete an appointment
import staffRoleMiddleware from '../middleware/authStaffAndDoctors.js';

const router = express.Router(); // Create a new Express router

// Middleware for authenticating hospital staff
import staffAuthentication from '../middleware/auth.js';

// Comment this if you dont want to apply authentication to all patient-related routes
router.use('/appointments', staffAuthentication);

// Route to get all appointments
router.get('/appointments', staffRoleMiddleware, allAppointments);

// Route to get a specific appointment by ID
router.get('/appointments/:id', oneAppointment);

// Route to create a new appointment
router.post('/appointments', staffRoleMiddleware, createAppointment);

// Route to delete an appointment by ID
router.delete('/appointments/:id', staffRoleMiddleware, deleteAppointment);

export default router; // Export the router for use in the main application
