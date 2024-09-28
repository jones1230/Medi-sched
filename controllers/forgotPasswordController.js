const Staff = require('../models/HospitalStaff');

const forgotpassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await Staff.find({ email });
        if(!user) return res.status(404).json({ success: false, msg: `User with email ${email} does not exist` });
        
    } catch (error) {
        
    }
}

module.exports = forgotpassword;