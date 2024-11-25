import { Schema, model } from 'mongoose';
import hospitalStaffSchema from './HospitalStaff.js';

// Define the schema for blacklisted tokens
const blacklistedTokens = new Schema({
    token: {
        type: String,
        required: true, // The token to be blacklisted
        reference: hospitalStaffSchema, // Reference to the HospitalStaff schema
    }
}, { timestamps: true }) // Automatically adds createdAt and updatedAt timestamps

// Export the blacklistedTokens model based on the schema
export default model('blacklistedTokens', blacklistedTokens);
