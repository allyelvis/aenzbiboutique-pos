// Model for sales
const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Sales = mongoose.model('Sales', SalesSchema);

module.exports = Sales;
