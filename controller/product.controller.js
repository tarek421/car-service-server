const { v4: uuidv4 } = require('uuid');
const Product = require('../model/product.modal');

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
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        product.title = req.body.title;
        product.price = req.body.price;
        product.description = req.body.description;
        product.rating = req.body.rating;
        product.catagory = req.body.catagory;
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.deleteProduct = verifyToken, async (req, res) => {

    try {
        const token = req.headers.authorization;
        const requester = req.decodedEmail;
        if (requester) {
            const requesterAccount = await User.findOne({
                email: requester,
            });

            if (requesterAccount.role === 'admin' || requesterAccount.role === 'administer') {
                const id = req.query.id;

                const filter = { _id: ObjectId(id) };
                const result = await Destination.deleteOne(filter);
                res.json(result);
            }
        }
    } catch (error) {
        res.status(500).json(error.message)
    }


}

