

const express = require('express');
const { postOrder, findAllOrders, orderStatus } = require('../controller/order.controller');
const orderRouter = express.Router();
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

orderRouter.get('/', findAllOrders);
orderRouter.post('/', postOrder);
orderRouter.put('/status/', verifyToken, orderStatus);


module.exports = orderRouter; 