import Patient from '../models/Patient.js';

/**
 * @route PUT /api/patients/:id
 * @desc Update patient data by ID
 * @access Public
 */
const updatePatientData = async (req, res) => {
    try {
        const id = req.params.id;
        const updateBody = req.body;

        // Update patient data based on the ID and return the updated document
        const updatedPatient = await Patient.findOneAndUpdate(
            { _id: id },
            updateBody,
            { new: true } // Return the updated document
        );

        // Check if the patient was found and updated
        if (!updatedPatient) {
            return res.status(404).json({ success: false, msg: 'Patient not found' });
        }

        // Respond with the updated patient data
        res.status(200).json(updatedPatient);
    } catch (error) {
        // Handle unexpected errors
        res.status(500).json({ success: false, msg: 'Update failed', error: error.message });
    }
}

export default updatePatientData;
