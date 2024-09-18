const express = require('express');
const { allAppointments, oneAppointment } = require('../controllers/getAppointments');
const createAppointment = require('../controllers/postAppointment');
const router = express.Router();

router.get('/bookappointments', allAppointments);

router.get('/bookappointments/:id', oneAppointment);

router.post('/bookappointments', createAppointment);

router.delete('/bookappointments/:id', );

module.exports = router;