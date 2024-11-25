import express from 'express';
import { signUpStaff, loginStaff } from '../controllers/postStaff.js'; // Import controller functions for staff registration and login
const router = express.Router(); // Create an instance of the Express router

// Route for hospital staff to register
router.post('/register', signUpStaff);

// Route for hospital staff to log in
router.post('/login', loginStaff);

export default router;
