const { verify } = require('jsonwebtoken');
const { generateToken } = require('./postStaff');
require('dotenv').config();

const refresh = (req, res) => {
    try {
        const refreshTokenHeader = req.get('cookie').split('=')[1]
        const user = verify(refreshTokenHeader, process.env.REFRESH_KEY);
        const { token, refreshToken } = generateToken(user);
        console.log(user);
        res
        .header('authorization', token)
        .cookie('refreshToken', refreshToken, {httpOnly: true, sameSite: 'strict'})
        .send(`${token} ${refreshToken}`);
    } catch (error) {
        res.status(401).json({msg: error});
    }
}

module.exports = refresh;