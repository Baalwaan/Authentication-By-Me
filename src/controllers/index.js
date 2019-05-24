const express = require('express');
// const path = require('path');

// initialising express router
const router = express.Router();

// controllers
const home = require('./home');
const signUp = require('./signUp');


// routes
router.get('/', home);
router.get('/signup', signUp);

module.exports = router;
