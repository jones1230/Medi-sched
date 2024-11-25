import  blacklistedTokens from '../models/blacklistTokens.js';

/**
 * @route POST /api/logout
 * @desc Blacklist the access token to log out the user
 * @access Public
 */
const logout = async (req, res) => {
    try {
        // Check if authorization header is present
        const authHeader = req.get('authorization');
        if (!authHeader) return res.status(204).send();

        // Extract access token from authorization header
        const accessToken = authHeader.split(' ')[1];

        // Check if the token is already blacklisted
        const blacklistTokenExist = await blacklistedTokens.findOne({ token: accessToken });
        if (blacklistTokenExist) return res.status(204).send();

        // Blacklist the token by saving it to the database
        const blacklistToken = new blacklistedTokens({ token: accessToken });
        await blacklistToken.save();

        // Respond with success message
        res.status(200).send('You have successfully logged out!');
    } catch (error) {
        // Handle errors
        res.status(400).json({ success: false, msg: error.message });
    }
}

export default logout;
