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
const logOut = require('./logout');
// const checkToken = require("./checkToken");
// for testing
const profile = require('./profile');

// routes
router.get('/', home);
router.get('/signup', signUp);
router.get('/loginpage', loginPage);

// if endpoint is profile

router.get('/logout', logOut);

router.post('/postuser', postUser);
router.post('/login', login);

// testing endpoint
// router.get("/google", home);
// router.get("/profile", checkToken);

module.exports = router;
