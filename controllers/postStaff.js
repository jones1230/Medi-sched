import bcryptjs from 'bcryptjs';
const { genSalt, hash, compare } = bcryptjs;
import jwt from 'jsonwebtoken';
const { sign } = jwt;
import Staff from '../models/HospitalStaff.js';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Generate JWT and refresh token for a user
 * @param {Object} user - The user object containing id, name, and role
 * @returns {Object} - An object containing the access token and refresh token
 */
export const generateToken = (user) => {
    const payload = { sub: user.id, name: user.name, roles: user.role, iat: Date.now() };
    const token = sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' }); // Access token expires in 1 hour
    const refreshToken = sign(payload, process.env.REFRESH_KEY, { expiresIn: '7d' }); // Refresh token expires in 7 days
    return { token, refreshToken };
}

/**
 * Sign up a new staff member
 * @route POST /api/staff/signup
 * @desc Register a new staff member with hashed password
 * @access Public
 */
export const signUpStaff = async (req, res) => {
    try {
        // Check if email already exists
        const staff = await Staff.findOne({ email: req.body.email });
        if (staff) {
            return res.status(400).json({ success: false, msg: 'Email is already in use' });
        }

        // Hash the password
        const password = req.body.password;
        const saltRounds = 10;
        const salt = await genSalt(saltRounds);
        const hashedPassword = await hash(password, salt);

        // Create and save new staff member
        const newStaff = new Staff({
            name: req.body.name,
            gender: req.body.gender,
            dob: req.body.dob,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role
        });
        await newStaff.save();
        res.status(201).json({ success: true, msg: 'Staff created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: 'Failed to create new staff' });
    }
}

/**
 * Log in a staff member
 * @route POST /api/staff/login
 * @desc Authenticate staff member and provide JWT and refresh token
 * @access Public
 */
export const loginStaff = async (req, res) => {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await Staff.findOne({ email: email });
    if (!user) {
        console.log('Username incorrect');
        return res.status(400).json({ success: false, msg: 'Username/password is incorrect' });
    }

    // Compare passwords
    const pass = await compare(password, user.password);
    if (!pass) {
        console.log('Password incorrect');
        return res.status(400).json({ success: false, msg: 'Username/password is incorrect' });
    }

    console.log(`User with id: ${user._id} is logged in...`);

    // Generate tokens
    const { token, refreshToken } = generateToken(user);

    // Set tokens in response
    res
        .header('Authorization', `Bearer ${token}`)
        .cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' })
        .json({ Authorization: `Bearer ${token}`, refreshToken });
}
