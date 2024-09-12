const express = require('express');
const { signUpStaff, loginStaff } = require('../controllers/postStaff');
const router = express.Router();


router.post('/register', signUpStaff);

router.post('/login', loginStaff);

module.exports = router;