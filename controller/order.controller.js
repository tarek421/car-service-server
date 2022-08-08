const { v4: uuidv4 } = require('uuid');
const Order = require('../model/order.modal');


exports.findAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(200).json(error.message);
    }
}




exports.postOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            id: uuidv4(),
            title: req.body.title,
            email: req.body.email,
            name: req.body.name,
            price: Number(req.body.price),
            quantity: req.body.quantity
        })
        await newOrder.save();
        res.status(200).json({ message: 'successfully Order', newOrder });
    } catch (error) {
        res.status(500).json(error.message);
    }
}


