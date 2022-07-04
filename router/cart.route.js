const express = require('express');
const { postSingleCart, getAllCart } = require('../controller/cart.controller');
const cartRouter = express.Router();



cartRouter.get('/', getAllCart);
// cartRouter.get('/:id', getSingleCart);
cartRouter.post('/', postSingleCart);

module.exports = cartRouter;
