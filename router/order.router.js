

const express = require('express');
const { postOrder, findAllOrders, orderStatus } = require('../controller/order.controller');
const orderRouter = express.Router();

orderRouter.get('/', findAllOrders);
orderRouter.post('/', postOrder);
orderRouter.put('/status', orderStatus);


module.exports = orderRouter; 