// Routes for customers
const express = require('express');
const router = express.Router();
const { getCustomers } = require('./customersController');

router.get('/', getCustomers);

module.exports = router;
