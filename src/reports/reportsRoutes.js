// Routes for reports
const express = require('express');
const router = express.Router();
const { getReports } = require('./reportsController');

router.get('/', getReports);

module.exports = router;
