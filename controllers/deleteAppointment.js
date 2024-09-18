const appointment = require('../models/Appointment');

const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        await appointment.findByIdAndDelete(id);
        res.send('Appointment deleted');
    } catch (error) {
        if (error.name == 'CastError') {
            return res.status(500).json({ success: false, msg: 'Invalid appointment id'});
        }
        res.status(500).json({ success: false, msg: error.name});
    }
}

module.exports = deleteAppointment;