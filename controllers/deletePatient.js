const Patient = require('../models/Patient');

const deletePatient = async (req, res) => {
    try {
        const id = req.params.id;
        await Patient.findByIdAndDelete(id);
        res.status(200).json({ sucess: true, msg: `Patient with id: ${id} deleted successfully` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: 'Action failed' });
    }
}

module.exports = deletePatient;