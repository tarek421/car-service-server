const { v4: uuidv4 } = require('uuid');
const Rivews = require('../model/rivew.modal');

exports.createRivew = async (req, res) => {
    try {
        const newRivew = new Rivews({
            id: req.body.id,
            name: req.body.name,
            image: req.body.image,
            email: req.body.email,
            rivew: req.body.rivew,
            rating: Number(req.body.rating)
            
        })
        await newRivew.save();
        res.status(200).json({ message: 'successfully created Rivew', newRivew });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.findAllRivews = async (req, res) => {
    try {
        const rivew = await Rivews.find();
        res.status(200).json(rivew);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.findOneRivew = async (req, res) => {
    try {
        const rivew = await Rivews.find({id: req.params.id});
        res.status(200).json(rivew);
    } catch (error) {
        res.status(500).json(error.message)
    }
}