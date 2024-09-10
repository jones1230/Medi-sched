const express = require('express');
const { postStaff, loginStaff } = require('../controllers/postStaff');
const router = express.Router();


router.post('/register', postStaff);

router.post('/login', loginStaff);

module.exports = router;