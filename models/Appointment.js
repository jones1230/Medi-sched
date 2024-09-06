const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    patient_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Patient' },
    doctor_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Doctor' },
    appointment_date: Date,
    appointment_time: time,
    appointment_type: String,
    reason_for_visit: String,
}, { timestamps: true })

module.exports = mongoose.model('AppointmentSchema', AppointmentSchema);