const express = require('express');
const { allAppointments, oneAppointment } = require('../controllers/getAppointments');
const createAppointment = require('../controllers/postAppointment');
const deleteAppointment = require('../controllers/deleteAppointment');
const router = express.Router();

router.get('/bookappointments', allAppointments);

router.get('/bookappointments/:id', oneAppointment);

router.post('/bookappointments', createAppointment);

router.delete('/bookappointments/:id', deleteAppointment);

module.exports = router;