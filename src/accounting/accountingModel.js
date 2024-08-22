// Model for accounting
const mongoose = require('mongoose');

const AccountingSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Accounting = mongoose.model('Accounting', AccountingSchema);

module.exports = Accounting;
