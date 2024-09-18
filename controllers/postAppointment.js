const appointment = require('../models/Appointment');

/**
 * @route POST /api/appointments
 * @desc Create a new appointment
 * @access Public
 */
const createAppointment = async (req, res) => {
    const {
        patient_email,
        doctor_email,
        appointment_date,
        appointment_time,
        appointment_type,
        reason_for_visit
    } = req.body;

    try {
        // Create a new appointment instance
        const newAppointment = new appointment({
            patient_email,
            doctor_email,
            appointment_date,
            appointment_time,
            appointment_type,
            reason_for_visit
        });

        // Save the new appointment to the database
        await newAppointment.save();

        // Respond with the created appointment data
        res.status(201).json(newAppointment);
    } catch (error) {
        // Handle unexpected errors
        res.status(500).json({ success: false, msg: error.message });
    }
}

module.exports = createAppointment;
