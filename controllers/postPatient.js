const Patient = require('../models/Patient');

const postPatient = async (req, res) => {
    try {
        const newPatient = await new Patient({
            name: req.body.name,
            gender: req.body.gender,
            dob: req.body.dob,
            age: req.body.age,
            email: req.body.email,
            contact: req.body.contact,
            marital_status: req.body.marital_status,
            address: req.body.address,
            nationality: req.body.nationality,
            ID_number: req.body.ID_number,
            Next_of_kin: req.body.Next_of_kin,
            Next_of_kin_phone_number: req.body.Next_of_kin_phone_number,
            blood_group: req.body.blood_group,
            Emergency_contact: req.body.Emergency_contact,
            relevant_medical_history: req.body.relevant_medical_history,
            allergies: req.body.allergies,
            medications: req.body.medications
        })
        await newPatient.save();
        console.log(`Patient created successfully id: ${newPatient._id}`);
        res.status(201).json({ success: true, msg: 'Patient created successfully' });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ success: false, msg: 'Failed to create patient', error: err.message });
    }
}
module.exports = postPatient;