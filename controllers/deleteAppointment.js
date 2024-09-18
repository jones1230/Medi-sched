const appointment = require('../models/Appointment');

/**
 * Delete an appointment by ID
 * @route DELETE /api/appointments/:id
 * @param {Object} req - Express request object containing the appointment ID in params
 * @param {Object} res - Express response object
 * @returns {void}
 */
const deleteAppointment = async (req, res) => {
    try {
        // Extract appointment ID from request parameters
        const { id } = req.params;

        // Find and delete the appointment by ID
        await appointment.findByIdAndDelete(id);

        // Send a success response
        res.status(200).send('Appointment deleted');
    } catch (error) {
        // Handle invalid appointment ID (CastError)
        if (error.name === 'CastError') {
            return res.status(500).json({ success: false, msg: 'Invalid appointment ID' });
        }

        // Handle any other errors
        res.status(500).json({ success: false, msg: error.name });
    }
}

module.exports = deleteAppointment;
