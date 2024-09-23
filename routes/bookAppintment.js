const express = require('express');
const { allAppointments, oneAppointment } = require('../controllers/getAppointments'); // Import controller functions to get all appointments and a single appointment
const createAppointment = require('../controllers/postAppointment'); // Import controller function to create a new appointment
const deleteAppointment = require('../controllers/deleteAppointment'); // Import controller function to delete an appointment
const router = express.Router(); // Create a new Express router

// Middleware for authenticating hospital staff
const staffAuthentication = require('../middleware/auth');

// Comment this if you dont want to apply authentication to all patient-related routes
router.use('/bookappointments', staffAuthentication);

// Route to get all appointments
router.get('/bookappointments', allAppointments);

// Route to get a specific appointment by ID
router.get('/bookappointments/:id', oneAppointment);

// Route to create a new appointment
router.post('/bookappointments', createAppointment);

// Route to delete an appointment by ID
router.delete('/bookappointments/:id', deleteAppointment);

module.exports = router; // Export the router for use in the main application
