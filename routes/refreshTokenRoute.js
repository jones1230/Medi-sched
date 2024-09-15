const express = require('express');
const router = express.Router();
const refresh = require('../controllers/refresh');

router.post('/refresh', refresh)

module.exports = router;