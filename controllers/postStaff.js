const Staff = require('../models/HospitalStaff');
const bcrypt = require('bcryptjs');

const postStaff = async (req, res) => {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedpassword = await bcrypt.hash(req.body.password, salt);
        console.log(hashedpassword);
        const newStaff = new Staff({
            name: req.body.name,
            gender: req.body.gender,
            dob: req.body.dob,
            email: req.body.email,
            password: hashedpassword,
            role: req.body.role
        })
        await newStaff.save();
        res.status(201).json({ success: true, msg: 'Staff created successfully' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: 'Failed to create new staff' })
    }
}

module.exports = postStaff;