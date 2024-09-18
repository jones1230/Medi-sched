const express = require('express');
const router = express.Router();

// Import the controller function responsible for refreshing tokens
const refresh = require('../controllers/refresh');

// Route to handle token refresh requests
router.post('/refresh', refresh);

module.exports = router; // Export the router to be used in the main application
