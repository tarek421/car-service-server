

const express = require('express');
const { postOrder, findAllOrders } = require('../controller/order.controller');
const orderRouter = express.Router();

orderRouter.get('/', findAllOrders);
orderRouter.post('/', postOrder);


module.exports = orderRouter; 