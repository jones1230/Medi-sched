const Staff = require('../models/HospitalStaff');
const bcrypt = require('bcryptjs');

const postStaff = async (req, res) => {
    try {
        if (Staff.findOne({ email: req.body.email })) {
            return res.json({ succes: false, msg: 'Email is already in use' });
        }
        const password = req.body.password;
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedpassword = await bcrypt.hash(password, salt);
        // console.log(hashedpassword);
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

const loginStaff = async (req, res) => {
    const { email, password, role } = req.body;
    const user = await Staff.findOne({ email: email });
    if (!user) {
        res.status(400).json({ success: false, msg: 'Username/password is incorrect' });
    }
    if (!bcrypt.compare(password, user.password)) {
        res.status(400).json({ sucess: false, msg: 'Username/password is incorrected' });
    }
    console.log(`User with id: ${user._id} is logged in...`)
    res.send('Logged in');
}


module.exports = { postStaff, loginStaff };