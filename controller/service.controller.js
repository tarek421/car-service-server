const { v4: uuidv4 } = require('uuid');
const Services = require('../model/service.model');


exports.findAllServices = async (req, res) => {
    try {
        const services = await Services.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(200).json(error.message);
    }
}

exports.findOneService = async (req, res) => {
    try {
        const service = await Services.find({id: req.params.id});
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json(error.message)
    }
}



exports.uploadService = async (req, res) => {
    try {
        const newService = new Services({
            id: uuidv4(),
            title: req.body.title,
            catagory: req.body.catagory,
            price: Number(req.body.price),
            header: req.body.header,
            description1: req.body.description1,
            description2: req.body.description2,
            coverPhoto: req.body.coverPhoto,
            photoUrl1: req.body.photoUrl1,
            photoUrl2: req.body.photoUrl2,
            icon : req.body.icon

        })
        await newService.save();
        res.status(200).json({ message: 'successfully created Product', newService });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.updateService = async (req, res) => {
    try {
        const service = await Product.findOne({id: req.params.id});
    product.title = req.body.title;
    product.price = req.body.price;
    product.header = req.body.header;
    product.description1 = req.body.description1;
    product.description2 = req.body.description2;
    product.catagory = req.body.catagory;
    product.coverPhoto = req.body.coverPhoto;
    product.photoUrl1 = req.body.photoUrl1;
    product.photoUrl2 = req.body.photoUrl2;
    await service.save();
    res.status(200).json(service);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.deleteService = async (req, res) => {
    try {
        await Services.deleteOne({id: req.params.id});
        res.status(200).json({message: "Service deleted successfully"})
    } catch (error) {
        res.status(500).json(error.message);
    }
}

