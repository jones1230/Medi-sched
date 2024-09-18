const mongoose = require('mongoose');

// Define the schema for the appointment collection
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
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

// Export the model based on the schema
module.exports = mongoose.model('AppointmentSchema', AppointmentSchema);
