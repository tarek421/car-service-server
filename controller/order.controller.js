const { v4: uuidv4 } = require('uuid');
const Order = require('../model/order.modal');


const verifyToken = async (req, res, next) => {
    console.log(req.headers?.authorization)
    if (req.headers?.authorization?.startsWith("Bearer ")) {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        try {
            const decodedUser = await admin.auth().verifyIdToken(token);
            req.decodedEmail = decodedUser.email;
            console.log(decodedUser.email);
        } catch { }
    }
    next();
};

exports.findAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(200).json(error.message);
    }
}

exports.postOrder = async (req, res) => {
    console.log(req.body.order)
    try {
        const newOrder = new Order({
            id: uuidv4(),
            title: req.body.title,
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            price: Number(req.body.price),
            quantity: req.body.quantity,
            status: req.body.status
        })
        await newOrder.save();
        res.status(200).json({ message: 'successfully Order', newOrder });
    } catch (error) {
        res.status(500).json(error.message);
    }
}


exports.orderStatus = verifyToken, async (req, res) => {
    try {
        const token = req.headers.authorization;
        const requesterEmail = req.decodedEmail;

        if (requester) {
            const requesterAccount = await Order.findOne({
                email: requesterEmail,
            });

            if (requesterAccount.role === 'admin' || requesterAccount.role === 'administer') {
                const { id, value } = req.body;
                const filter = { _id: ObjectId(id) };
                const update = { $set: { status: value } };
                const result = await Order.updateOne(filter, update);
                res.json(result);
            }
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}