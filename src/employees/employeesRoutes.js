// Routes for employees
const express = require('express');
const router = express.Router();
const { getEmployees } = require('./employeesController');

router.get('/', getEmployees);

module.exports = router;
