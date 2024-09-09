const Patient = require('../models/Patient');

const updatePatientData = async (req, res) => {
    try {
        const id = req.params.id;
        const updateBody = req.body;
        const update = await Patient.findOneAndUpdate({ _id: id }, updateBody, { new: true });
        res.status(200).json(update);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = updatePatientData;