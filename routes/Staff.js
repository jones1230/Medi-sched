const express = require('express');
const { signUpStaff, loginStaff } = require('../controllers/postStaff'); // Import controller functions for staff registration and login
const router = express.Router(); // Create an instance of the Express router

// Route for hospital staff to register
router.post('/register', signUpStaff);

// Route for hospital staff to log in
router.post('/login', loginStaff);

module.exports = router; // Export the router for use in other parts of the app
