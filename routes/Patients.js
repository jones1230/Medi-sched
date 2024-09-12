const express = require('express');
const router = express.Router();
const { getPatients, getPatientById } = require('../controllers/getPatients');
const postPatient = require('../controllers/postPatient');
const updatePatientData = require('../controllers/patchPatient');
const deletePatient = require('../controllers/deletePatient');
const staffAuthentication = require('../middleware/auth');

// router.use('/patients', staffAuthentication);

router.get('/patients', staffAuthentication, getPatients);

router.get('/patients/:id', getPatientById);

router.post('/patients', postPatient);

router.patch('/patients/:id', updatePatientData);

router.delete('/patients/:id', deletePatient)

module.exports = router;