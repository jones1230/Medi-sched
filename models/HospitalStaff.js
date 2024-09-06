const mongoose = require('mongoose');

const HospitalStaffSchema = new mongoose.Schema({
    name: String,
    gender: String,
    dob: Date,
    email: String,
    password: String,
    role: String,
}, { timestamps: true })

module.exports = mongoose.model("HospitalStaffSchema", HospitalStaffSchema);