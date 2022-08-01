const { v4: uuidv4 } = require('uuid');
const User = require('../model/user.model')

exports.GetAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.GetOneUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        let isAdmin = false;
        if (user?.role === "admin" || user?.role === "administer") {
          isAdmin = true;
        }
        res.status(200).json(user, { admin: isAdmin });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.CreateUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email,
            photo: req.body.photo
        });
        await newUser.save();
        res.status(200).json({ message: 'successfully created user', newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.UpdateUser = async (req, res) => {
    try {
        const filter = { email: req.body.email }
        const update = {
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email,
            photo: req.body.photo
        };
        const user = await User.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true,
        });
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
}







exports.DeleteUser = async (req, res) => {
    try {
        await User.deleteOne({ id: req.params.id });
        res.status(200).json({ message: 'successfully deleted user' });
    } catch (error) {
        res.status(500).json(error.message)
    }
}