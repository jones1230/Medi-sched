const appointments = require('../models/Appointment');

const allAppointments = async (req, res) => {
    try {
        const allAppointments = await appointments.find();
        res.send(allAppointments);
    } catch (error) {
        res.send(error);
    }
}

const oneAppointment = async (req, res) => {
    try {
        const id = req.params.id;
        const appointment = await appointments.findById(id);
        if (appointment == undefined) {
            return res.status(404).json({ success: false, msg: 'No appointment found'});
        }
        return res.send(appointment);
    } catch (error) {
        console.log(error.name);
        if (error.name == 'CastError') {
            return res.status(404).json({ success: false, msg: 'Invalid appointment id'});
        }
        return res.status(404).json({ success: false, msg: error.name});
    }
}

module.exports = { allAppointments, oneAppointment };