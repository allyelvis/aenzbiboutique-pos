// Model for inventory
const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  name: String,
  description: String
});

const Inventory = mongoose.model('Inventory', InventorySchema);

module.exports = Inventory;
