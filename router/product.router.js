const express = require('express');
const { uploadProduct, findAllProducts, deleteProduct, findOneProduct, updateProduct, findByCatagory } = require('../controller/product.controller');
const productRouter = express.Router();

productRouter.get('/', findAllProducts);
productRouter.get('/:id', findOneProduct);
productRouter.get('/catagories/:catagory', findByCatagory);
productRouter.post('/', uploadProduct);
productRouter.patch('/:id', updateProduct);
productRouter.delete('/delete', deleteProduct);


module.exports = productRouter; 