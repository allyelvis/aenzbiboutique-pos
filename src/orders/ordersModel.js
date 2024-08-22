// Model for orders
const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Orders = mongoose.model('Orders', OrdersSchema);

module.exports = Orders;
