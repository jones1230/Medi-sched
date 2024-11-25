import HospitalStaff from '../models/HospitalStaff.js';

const verifyRole = async (req, res, next) => {
   try {
    const role = req.User.roles;
    console.log(role)
    let staff = await HospitalStaff.findById(req.User.sub)
    if (req.User.sub == staff.id && ((staff.role === 'Doctor') || (staff.role === 'Staff') || (staff.role === 'Admin'))) {
        req.staff = staff;
        req.role = role;
        return next();
    }
    return res.status(401).json({ success: false, msg: 'Unauthorized request' });
   } catch (error) {
    throw error;
   }
}

export default verifyRole;