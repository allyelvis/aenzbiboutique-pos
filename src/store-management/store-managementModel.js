// Model for store-management
const mongoose = require('mongoose');

const Store-managementSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Store-management = mongoose.model('Store-management', Store-managementSchema);

module.exports = Store-management;
