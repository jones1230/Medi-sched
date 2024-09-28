const Patient = require('../models/Patient');
const mongoose = require('mongoose');
const { v4:uuidv4 } = require('uuid');

/**
 * @route POST /api/patients
 * @desc Create a new patient record
 * @access Public
 */
const postPatient = async (req, res) => {
    try {
        // Create a new patient instance with data from the request body
        const newPatient = new Patient({
            _id: uuidv4(),
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
        });

        // Save the new patient to the database
        await newPatient.save();

        // Log success and respond with a success message
        console.log(`Patient created successfully id: ${newPatient._id}`);
        res.status(201).json({ success: true, msg: 'Patient created successfully' });
    } catch (err) {
        // Log the error and respond with a failure message
        console.log(err.message);
        res.status(400).json({ success: false, msg: 'Failed to create patient', error: err.message });
    }
}

module.exports = postPatient;
