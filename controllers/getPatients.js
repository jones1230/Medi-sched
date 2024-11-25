import Patient from '../models/Patient.js';
import Staff from '../models/HospitalStaff.js';

/**
 * @route GET /api/patients
 * @desc Retrieve all patients
 * @access Admin only
 */
export const getPatients = async (req, res) => {
    try {
        // Retrieve all patients
        let patients = await Patient.find();
        // Retrieve staff information based on user ID
        let staff = await Staff.findById(req.User.sub);

        // Responds with patients
        res.status(200).json(patients);

    } catch (err) {
        // Handle unexpected errors
        res.status(500).json({ success: false, msg: 'Server error' });
    }
}

/**
 * @route GET /api/patients/:id
 * @desc Retrieve a patient by ID
 * @access Public
 */
export const getPatientById = async (req, res) => {
    try {
        const patientId = req.params.id;
        // Find patient by ID
        const patient = await Patient.findById(patientId);

        // If patient not found, return 404
        if (!patient) {
            return res.status(404).json({ success: false, msg: 'Patient ID does not exist or is incorrect' });
        }

        // Return patient data
        res.status(200).json(patient);
    } catch (err) {
        // Handle errors during the query
        res.status(500).json({ success: false, msg: 'Patient query failed' });
    }
}
