const express = require('express');
const router = express.Router();
const { getPatients, getPatientById } = require('../controllers/getPatients');
const postPatient = require('../controllers/postPatient');

router.get('/patients', getPatients);

router.get('/patients/:id', getPatientById);

router.post('/patients', postPatient);

module.exports = router;