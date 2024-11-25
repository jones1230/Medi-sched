import jwt from 'jsonwebtoken';
const { verify } = jwt;
import { generateToken } from './postStaff.js';
import dotenv from 'dotenv';
dotenv.config();

/**
 * @route POST /api/refresh
 * @desc Refresh the access token using the refresh token
 * @access Public
 */
const refresh = (req, res) => {
    try {
        // Extract the refresh token from the cookie
        const refreshTokenHeader = req.get('cookie').split('=')[1];

        // Verify the refresh token
        const user = verify(refreshTokenHeader, process.env.REFRESH_KEY);

        // Generate new tokens
        const { token, refreshToken } = generateToken(user);

        console.log(user);

        // Set new tokens in response
        res
            .header('Authorization', `Bearer ${token}`)
            .cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' })
            .send({ token, refreshToken });
    } catch (error) {
        // Handle token verification errors
        res.status(401).json({ success: false, msg: 'Invalid refresh token', error: error.message });
    }
}

export default refresh;
