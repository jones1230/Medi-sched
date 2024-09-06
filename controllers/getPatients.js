const Patient = require('../models/Patient');

const getPatients = async (req, res) => {
    try {
        let patients = await Patient.find();
        await res.status(200).json(patients);
        console.log('Get /api/patients request success...')
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const getPatientById = async (req, res) => {
    try {
        const patientId = req.params.id;
        const patient = await Patient.findById(patientId);
        if (patient == undefined) {
            return res.status(404).json({ success: false, msg: 'Patient ID does not exist or is incorrrect' });
        }
        res.status(200).json(patient);
    } catch (err) {
        res.status(404).json({ success: false, msg: 'Patient query failed' })
    }
}

module.exports = { getPatients, getPatientById };