const mongoose = require('mongoose');
const hospitalStaffSchema = require('./HospitalStaff');

const blacklistedTokens = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        reference: hospitalStaffSchema,
    }},
    { timestamps: true }
)

module.exports = mongoose.model('blacklistedTokens', blacklistedTokens);