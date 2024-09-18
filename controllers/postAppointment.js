const appointment = require('../models/Appointment');

const createAppointment = async(req, res) => {
    const { patient_email,
        doctor_email,
        appointment_date,
        appointment_time,
        appointment_type,
        reason_for_visit, } = req.body;
    try {
        const newAppointment = new appointment({
        patient_email,
        doctor_email,
        appointment_date,
        appointment_time,
        appointment_type,
        reason_for_visit
        });
        await newAppointment.save();
        res.send(newAppointment);
    } catch (error) {
        res.status(500).json({ success: false, msg: error.name });
    }
}

module.exports = createAppointment;