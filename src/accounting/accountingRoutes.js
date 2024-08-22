// Routes for accounting
const express = require('express');
const router = express.Router();
const { getAccounting } = require('./accountingController');

router.get('/', getAccounting);

module.exports = router;
