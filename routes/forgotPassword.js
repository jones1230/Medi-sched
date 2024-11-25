import { Router } from 'express';
import { forgotPassword, resetPassword } from '../controllers/forgotPasswordController.js';
const router = Router();

router.post('/password-reset', forgotPassword);

router.post('/password-reset/:userId/:token', resetPassword)

export default router;
