import { Schema, model } from 'mongoose';

// Define the schema for the Hospital Staff collection
const HospitalStaffSchema = new Schema({
    name: { type: String, required: true }, // Staff member's name
    gender: { type: String, required: true }, // Staff member's gender
    dob: { type: Date, required: true }, // Staff member's date of birth
    email: { type: String, required: true }, // Staff member's email address
    password: { type: String, required: true }, // Staff member's password (hashed for security)
    role: { type: String, required: true }, // Role of the staff member (e.g., doctor, nurse, admin)
}, { timestamps: true }) // Automatically adds createdAt and updatedAt timestamps

// Export the HospitalStaff model based on the schema
export default model("HospitalStaffSchema", HospitalStaffSchema);
