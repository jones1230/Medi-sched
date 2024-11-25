import Patient from '../models/Patient.js';

/**
 * @route DELETE /api/patients/:id
 * @desc Delete a patient by ID
 * @access Public
 */
const deletePatient = async (req, res) => {
    try {
        const id = req.params.id;

        // Attempt to delete patient by ID
        const result = await Patient.findByIdAndDelete(id);

        // Check if the patient was found and deleted
        if (!result) {
            return res.status(404).json({ success: false, msg: `Patient with id: ${id} not found` });
        }

        // Respond with success message
        res.status(200).json({ success: true, msg: `Patient with id: ${id} deleted successfully` });
    } catch (error) {
        console.log(error);
        // Handle unexpected errors
        res.status(500).json({ success: false, msg: 'Action failed', error });
    }
}

export default deletePatient;
