const mongoose = require('mongoose');

const HospitalStaffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model("HospitalStaffSchema", HospitalStaffSchema);