const express = require('express');
const path = require('path');

// initialising express router
const router = express.Router();

// controllers
const home = require('./home');


// routes
router.get('/', home);

module.exports = router;