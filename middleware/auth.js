const jwt = require('jsonwebtoken');
require('dotenv').config();

const staffAuthentication = (req, res, next) => {
    try {
        const authorizationHeader = req.headers['authorization'].split(' ');
        if (authorizationHeader == null) {
            return res.status(401).json({ success: false, msg: 'Unauthorized access', error: 'missing token' });
        }
        const token = authorizationHeader[1];
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.User = user;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, msg: 'Unauthorized access', error: error });
    }
}


module.exports = staffAuthentication;