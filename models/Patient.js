const mongoose = require('mongoose');

// Define the schema for the Patient collection
const patientSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Patient's name
    age: { type: Number, required: true }, // Patient's age
    gender: { type: String, required: true }, // Patient's gender
    dob: { type: Date, required: true }, // Patient's date of birth
    email: { type: String, required: true }, // Patient's email address
    contact: Number, // Patient's contact number
    marital_status: { type: String, required: true }, // Patient's marital status
    address: String, // Patient's address
    nationality: { type: String, required: true }, // Patient's nationality
    ID_number: { type: String, required: true }, // Patient's ID number
    Next_of_kin: String, // Next of kin's name
    Next_of_kin_phone_number: Number, // Next of kin's phone number
    blood_group: { type: String, required: true }, // Patient's blood group
    Emergency_contact: { type: String, required: true }, // Emergency contact information
    relevant_medical_history: String, // Relevant medical history of the patient
    allergies: [String], // List of allergies the patient has
    medications: [String] // List of medications the patient is taking
}, { timestamps: true }) // Automatically adds createdAt and updatedAt timestamps

// Export the Patient model based on the schema
module.exports = mongoose.model("Patient", patientSchema);
