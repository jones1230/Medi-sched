const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    patient_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Patient' },
    doctor_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'hospitalStaffSchema' },
    appointment_date: Date,
    appointment_time: Date,
    appointment_type: String,
    reason_for_visit: String,
}, { timestamps: true });

module.exports = mongoose.model('AppointmentSchema', AppointmentSchema);