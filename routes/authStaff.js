const express = require('express');
const postStaff = require('../controllers/postStaff');
const router = express.Router();


router.post('/register', postStaff);

module.exports = router;