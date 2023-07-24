const User = require('../model/user.model')


//Make Admin
exports.setAdminUser = async (req, res) => {
    try {
        const filter = { email: req.body.email }
        const users = await User.findOne(filter);
        const requestedEmail = users.email;

        if (req.body.email === requestedEmail) {
            const update = {
                role: req.body.role
            };
            const user = await User.findOneAndUpdate(filter, update, {
                new: true,
                upsert: true,
            });
            await user.save();
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}


exports.GetAdmin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        let isAdmin = false;
        if (user.role === "admin" || user.role === "administer") {
            isAdmin = true;
        }
        res.status(200).json({ admin: isAdmin });
    } catch (error) {
        res.status(500).json(error.message);
    }
}