// Model for customers
const mongoose = require('mongoose');

const CustomersSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Customers = mongoose.model('Customers', CustomersSchema);

module.exports = Customers;
