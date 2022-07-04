const Cart = require('../model/cart.modal');


exports.getAllCart = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(200).json(error.message);
    }
}

exports.postSingleCart = async (req, res) => {
    try {
        const newCart = new Cart({
            id: req.body.id,
        })
        res.status(200).json(newCart);
    } catch (error) {
        res.status(500).json(error.message);
    }
}