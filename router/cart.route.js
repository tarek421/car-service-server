const express = require('express');
const cartRouter = express.Router();
const { postSingleCart, getAllCart } = require('../controller/cart.controller');



cartRouter.get('/', getAllCart);
// cartRouter.get('/:id', getSingleCart);
cartRouter.post('/', postSingleCart);

module.exports = cartRouter;
