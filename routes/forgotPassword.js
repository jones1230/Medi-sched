const express = require('express');
const forgotPassword = require('../controllers/forgotPasswordController');
const router = express.Router();

router.post('/forgotpassword', forgotPassword);

module.exports = router;