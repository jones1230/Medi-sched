const express = require('express');
const logout = require('../controllers/logoutController'); // Import the logout controller function
const router = express.Router(); // Create a new Express router

// Route to handle user logout requests
router.post('/logout', logout);

module.exports = router; // Export the router for use in the main application
