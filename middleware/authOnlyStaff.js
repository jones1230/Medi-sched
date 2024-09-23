const Staff = require('../models/HospitalStaff');

const authOnlyStaff = async (req, res, next) => {
    const staff = await Staff.findById(req.User.sub);
    if(staff.role !== 'Staff') {
        return res.status(404).json({ success: false, msg: 'You are not allowed' });
    }
    next();
}

module.exports = authOnlyStaff;