const express = require('express');
const { uploadProduct, findAllProducts, deleteProduct, findOneProduct, updateProduct } = require('../controller/product.controller');
const productRouter = express.Router();

productRouter.get('/', findAllProducts);
productRouter.get('/:id', findOneProduct);
productRouter.post('/', uploadProduct);
productRouter.patch('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);


module.exports = productRouter;