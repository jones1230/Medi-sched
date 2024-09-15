const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Staff = require('../models/HospitalStaff');
require('dotenv').config();


const generateToken = (user) => {
    const payload = { sub: user.id, name: user.name, roles: user.role, iat: Date.now() }
    console.log(payload);
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1m' });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_KEY);
    return { token, refreshToken }
}


const signUpStaff = async (req, res) => {
    try {
        const staff = await Staff.findOne({ email: req.body.email })
        if (staff) {
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
    const { email, password } = req.body;
    const user = await Staff.findOne({ email: email });
    if (!user) {
        console.log('Username incorrect');
        return res.status(400).json({ success: false, msg: 'Username/password is incorrect' });
    }
    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
        console.log('Password incorrect');
        return res.status(400).json({ success: false, msg: 'Username/password is incorrect' });
    }
    console.log(`User with id: ${user._id} is logged in...`);
    // res.send('Logged in');

    const { token, refreshToken } = generateToken(user);
    res
    .header('Authorization', `Bearer ${token}`)
    .cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' })
    .json({ Authorization: `Bearer ${token}`, refreshToken});
}

module.exports = { signUpStaff, loginStaff, generateToken }