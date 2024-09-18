const jwt = require('jsonwebtoken');
const blacklistedTokens = require('../models/blacklistTokens');
require('dotenv').config();

const staffAuthentication = async (req, res, next) => {
    try {
        console.log(req.get('authorization'))
        const authorizationHeader = req.get('authorization');
        if (authorizationHeader == null) {
            return res.status(401).json({ success: false, msg: 'Unauthorized access', error: 'missing token' });
        }
        const token = authorizationHeader.split(' ')[1];
        const checkIfTokenBlacklisted = await blacklistedTokens.findOne({token});
        if (checkIfTokenBlacklisted != undefined) return res.status(401).json({success: false, msg: 'Token revoked'});
        try {
            const user = jwt.verify(token, process.env.SECRET_KEY);
            console.log(user);
            req.User = user;
            console.log(user)
        } catch (error) {
            return res.send(error);
        }
        next();
    } catch (error) {
        return res.status(401).json({ success: false, msg: 'Unauthorized access', error: error });
    }
}


module.exports = staffAuthentication;