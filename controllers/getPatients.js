const Patient = require('../models/Patient');
const Staff = require('../models/HospitalStaff');

const getPatients = async (req, res) => {
    let patients = await Patient.find();
    let staff = await Staff.findById(req.User.sub);
    if (req.User.sub == staff._id) {
        if (req.User.roles == 'Admin') {
            res.status(200).json(patients);
            console.log('Get /api/patients request success...');
        }
    }
    res.status(401).json({ success: false, msg: 'You are not an Admin' });
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