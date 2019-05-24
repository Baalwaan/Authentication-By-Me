const express = require('express');
// const path = require('path');

// initialising express router
const router = express.Router();

// controllers
const home = require('./home');
const signUp = require('./signUp');
const postUser = require('./postUser');


// routes
router.get('/', home);
router.get('/signup', signUp);


router.post('/postuser', postUser)

module.exports = router;
