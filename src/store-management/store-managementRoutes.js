// Routes for store-management
const express = require('express');
const router = express.Router();
const { getStore-management } = require('./store-managementController');

router.get('/', getStore-management);

module.exports = router;
