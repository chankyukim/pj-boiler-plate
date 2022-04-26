const express = require('express');
const router = express.Router();
const signUpController = require('../../controller/user/signUpController');
const signInController = require('../../controller/user/signInController');
const signOutController = require('../../controller/user/signOutController');
const refreshTokenController = require('../../controller/user/refreshTokenController');

router.post('/signup', signUpController.createNewUser);
router.post('/signin', signInController.handleLogin);
router.get('/signout', signOutController.handleLogout);
router.get('/refresh', refreshTokenController.handleRefreshToken);

module.exports = router;
