import jwt from 'jsonwebtoken';
import blacklistedTokens from '../models/blacklistTokens.js';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Middleware to authenticate staff using JWT
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Next middleware function
 * @returns {void}
 */
const staffAuthentication = async (req, res, next) => {
    try {
        // Retrieve the authorization header
        const authorizationHeader = req.get('authorization');
        if (!authorizationHeader) {
            return res.status(401).json({ success: false, msg: 'Unauthorized access', error: 'Missing token' });
        }

        // Extract token from authorization header
        const token = authorizationHeader.split(' ')[1];

        // Check if the token is blacklisted
        const blacklistedToken = await blacklistedTokens.findOne({ token });
        if (blacklistedToken) {
            return res.status(401).json({ success: false, msg: 'Token revoked' });
        }

        // Verify the token
        try {
            const user = jwt.verify(token, process.env.SECRET_KEY);
            req.User = user; // Attach user info to the request object
            next(); // Proceed to the next middleware
        } catch (error) {
            // Handle token verification errors
            return res.status(401).json({ success: false, msg: 'Invalid or expired token', error: error.message });
        }
    } catch (error) {
        // Handle unexpected errors
        return res.status(401).json({ success: false, msg: 'Unauthorized access', error: error.message });
    }
}

export default staffAuthentication;
