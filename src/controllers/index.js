const express = require('express');
// const path = require('path');

// initialising express router
const router = express.Router();

// controllers
const home = require('./home');
const signUp = require('./signUp');
const postUser = require('./postUser');
const login = require('./login');
const loginPage = require('./loginPage');
// for testing
const profile = require('./profile');

// routes
router.get('/', home);
router.get('/signup', signUp);
router.get('/loginpage', loginPage)


router.post('/postuser', postUser);
router.post('/login', login)


// testing endpoint
router.get('/google', home);
router.get('/profile', profile);


module.exports = router;
