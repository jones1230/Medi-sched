const Staff = require('../models/HospitalStaff');
const appointments = require('../models/Appointment');

/**
 * @route GET /api/appointments
 * @desc Retrieve all appointments
 * @access Public
 */


const allAppointments = async (req, res) => {
    if (req.User.sub == req.staff.id && req.role === 'Doctor') {
        const allAppointments = await appointments.find({ doctor_email: req.staff.email });
        return res.status(200).send(allAppointments);
    }
    try {
        // Retrieve all appointments
        const allAppointments = await appointments.find();
        res.status(200).json(allAppointments);
    } catch (error) {
        // Handle unexpected errors
        res.status(500).json({ success: false, msg: 'Failed to retrieve appointments', error });
    }
}

/**
 * @route GET /api/appointments/:id
 * @desc Retrieve a single appointment by ID
 * @access Public
 */
const oneAppointment = async (req, res) => {
    try {
        const id = req.params.id;
        // Find appointment by ID
        const appointment = await appointments.findById(id);

        // If appointment not found, return 404
        if (!appointment) {
            return res.status(404).json({ success: false, msg: 'No appointment found' });
        }
        
        // Return appointment data
        return res.status(200).json(appointment);
    } catch (error) {
        console.log(error.name);

        // Handle specific errors
        if (error.name === 'CastError') {
            return res.status(400).json({ success: false, msg: 'Invalid appointment ID' });
        }

        // Handle other errors
        return res.status(500).json({ success: false, msg: 'Error retrieving appointment', error });
    }
}

module.exports = { allAppointments, oneAppointment };
