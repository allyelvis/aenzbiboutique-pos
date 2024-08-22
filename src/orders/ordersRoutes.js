// Routes for orders
const express = require('express');
const router = express.Router();
const { getOrders } = require('./ordersController');

router.get('/', getOrders);

module.exports = router;
