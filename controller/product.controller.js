const { v4: uuidv4 } = require('uuid');
const Product = require('../model/product.modal');
const User = require('../model/user.model');

const verifyToken = async (req, res, next) => {
    if (req.headers?.authorization?.startsWith("Bearer ")) {
        const token = req.headers.authorization.split(" ")[1];

        try {
            const decodedUser = await admin.auth().verifyIdToken(token);
            req.decodedEmail = decodedUser.email;
        } catch { }
    }
    next();
}; 22

exports.findAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(200).json(error.message);
    }
}

exports.findOneProduct = async (req, res) => {
    try {
        const product = await Product.find({ id: req.params.id });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.findByCatagory = async (req, res) => {
    try {
        const productCatagory = await Product.find({ catagory: req.params.catagory });
        res.status(200).json(productCatagory);
    } catch (error) {
        res.status(500).json(error.message)
    }
}


exports.uploadProduct = async (req, res) => {
    try {
        const requesterEmail = req.decodedEmail;
        if (requesterEmail) {
            const requesterAccount = await User.findOne({
                email: requesterEmail,
            });
            if (requesterAccount.role === 'admin' || requesterAccount.role === 'administer') {
                const newProduct = new Product({
                    id: uuidv4(),
                    title: req.body.title,
                    catagory: req.body.catagory,
                    price: Number(req.body.price),
                    rating: Number(req.body.rating),
                    description: req.body.description,
                    photoUrl: req.body.photoUrl,
                })
                await newProduct.save();
                res.status(200).json({ message: 'successfully created Product', newProduct });
            } else {
                res.status(500).json({ message: 'Only Admin can upload product' });
            }
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const requesterEmail = req.decodedEmail;
        if (requesterEmail) {
            const requesterAccount = await User.findOne({
                email: requesterEmail,
            });
            if (requesterAccount.role === 'admin' || requesterAccount.role === 'administer') {
                const product = await Product.findOne({ id: req.params.id });
                product.title = req.body.title;
                product.price = req.body.price;
                product.description = req.body.description;
                product.catagory = req.body.catagory;
                product.photoUrl = req.body.photoUrl;
                await product.save();
                res.status(200).json(product);
            } else {
                res.status(500).json({ message: 'Only Admin can update product' });

            }
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const requesterEmail = req.decodedEmail;
        if (requesterEmail) {
            const requesterAccount = await User.findOne({
                email: requesterEmail,
            });
            if (requesterAccount.role === 'admin' || requesterAccount.role === 'administer') {
                await Product.deleteOne({ id: req.params.id });
                res.status(200).json({ message: 'successfully deleted Product' });
            } else {
                res.status(500).json({ message: 'Only Admin can delete product' });
            }
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

