const express = require('express');
const { uploadProduct, findAllProducts, deleteProduct, findOneProduct, updateProduct, findByCatagory } = require('../controller/product.controller');
const productRouter = express.Router();
const admin = require("firebase-admin");

const verifyToken = async (req, res, next) => {
    if (req.headers?.authorization?.startsWith("Bearer ")) {
        const token = req.headers.authorization.split(" ")[1];
        try {
            const decodedUser = await admin.auth().verifyIdToken(token);
            req.decodedEmail = decodedUser.email;
            next();
        } catch { }
    }
};

productRouter.get('/', findAllProducts);
productRouter.get('/:id', findOneProduct);
productRouter.get('/catagories/:catagory', findByCatagory);
productRouter.post('/', verifyToken, uploadProduct);
productRouter.patch('/:id', verifyToken, updateProduct);
productRouter.delete('/:id', verifyToken, deleteProduct);


module.exports = productRouter; 