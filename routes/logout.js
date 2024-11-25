import { Router } from 'express';
import logout from '../controllers/logoutController.js'; // Import the logout controller function
const router = Router(); // Create a new Express router

// Route to handle user logout requests
router.post('/logout', logout);

export default router; // Export the router for use in the main application
