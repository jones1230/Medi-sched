const blacklistedTokens = require('../models/blacklistTokens');

const logout = async (req, res) => {
    try {
        if (req.get('authorization') == undefined) return res.status(204);
        const accessToken = req.get('authorization').split(' ')[1];
        const blacklistTokenExist = await blacklistedTokens.findOne({token: accessToken});
        if(blacklistTokenExist) return res.status(204).send();
        const blacklistToken = new blacklistedTokens({
            token: accessToken
        })
        await blacklistToken.save();
        res.send('You have successfully logged out!');
    } catch (error) {
        res.status(400).json({success: false, msg: error});
    }
}

module.exports = logout;