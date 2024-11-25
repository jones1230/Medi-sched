import { Router } from 'express';
const router = Router();

// Import the controller function responsible for refreshing tokens
import refresh from '../controllers/refresh.js';

// Route to handle token refresh requests
router.post('/refresh', refresh);

export default router; // Export the router to be used in the main application
