// Routes for inventory
const express = require('express');
const router = express.Router();
const { getInventory } = require('./inventoryController');

router.get('/', getInventory);

module.exports = router;
