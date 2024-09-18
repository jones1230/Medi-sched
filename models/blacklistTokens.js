const mongoose = require('mongoose');
const hospitalStaffSchema = require('./HospitalStaff');

// Define the schema for blacklisted tokens
const blacklistedTokens = new mongoose.Schema({
    token: {
        type: String,
        required: true, // The token to be blacklisted
        reference: hospitalStaffSchema, // Reference to the HospitalStaff schema
    }
}, { timestamps: true }) // Automatically adds createdAt and updatedAt timestamps

// Export the blacklistedTokens model based on the schema
module.exports = mongoose.model('blacklistedTokens', blacklistedTokens);
