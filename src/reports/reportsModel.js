// Model for reports
const mongoose = require('mongoose');

const ReportsSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Reports = mongoose.model('Reports', ReportsSchema);

module.exports = Reports;
