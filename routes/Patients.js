const express = require('express');
const router = express.Router();

// Import controller functions for handling patient-related operations
const { getPatients, getPatientById } = require('../controllers/getPatients');
const postPatient = require('../controllers/postPatient');
const updatePatientData = require('../controllers/patchPatient');
const deletePatient = require('../controllers/deletePatient');

// Middleware for authenticating hospital staff
const staffAuthentication = require('../middleware/auth');
const authOnlyStaff = require('../middleware/authOnlyStaff');

// Comment this if you dont want to apply authentication to all patient-related routes
router.use('/patients', [ staffAuthentication, authOnlyStaff ]);

// Route to get all patients (protected by staff authentication)
router.get('/patients', getPatients);

// Route to get a specific patient by ID
router.get('/patients/:id', getPatientById);

// Route to create a new patient entry
router.post('/patients', postPatient);

// Route to update a patient's data
router.patch('/patients/:id', updatePatientData);

// Route to delete a patient entry
router.delete('/patients/:id', deletePatient);

module.exports = router;
