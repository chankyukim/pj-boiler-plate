const express = require('express');
const router = express.Router();
const { baseURL } = require('../library/constant');
const users = require('./user/user');
const employees = require('./api/employees');

router.use(`${baseURL}/users`, users);
router.use(`${baseURL}/employees`, employees);

module.exports = router;
