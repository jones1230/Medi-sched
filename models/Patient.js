const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true },
    contact: Number,
    marital_status: { type: String, required: true },
    address: String,
    nationality: { type: String, required: true },
    ID_number: { type: String, required: true },
    Next_of_kin: String,
    Next_of_kin_phone_number: Number,
    blood_group: { type: String, required: true },
    Emergency_contact: { type: String, required: true },
    relevant_medical_history: String,
    allergies: [String],
    medications: [String]
}, { timestamps: true })

module.exports = mongoose.model("Patient", patientSchema);