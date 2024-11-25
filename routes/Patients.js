import express from 'express';
const router = express.Router();

// Import controller functions for handling patient-related operations
import { getPatients, getPatientById } from '../controllers/getPatients.js';
import postPatient from '../controllers/postPatient.js';
import updatePatientData from '../controllers/patchPatient.js';
import deletePatient from '../controllers/deletePatient.js';

// Middleware for authenticating hospital staff
import staffAuthentication from '../middleware/auth.js';
import authOnlyStaff from '../middleware/authOnlyStaff.js';

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

export default router;
