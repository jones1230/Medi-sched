const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    patient_email: {
        type: String,
        required: true
    },
    doctor_email: {
        type: String,
        required: true
    },
    appointment_date: Date,
    appointment_time: Date,
    appointment_type: String,
    reason_for_visit: String,
}, { timestamps: true });

module.exports = mongoose.model('AppointmentSchema', AppointmentSchema);