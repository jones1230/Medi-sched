const express = require('express');
const logout = require('../controllers/logoutController');
const router = express.Router();

router.post('/logout', logout);

module.exports = router;