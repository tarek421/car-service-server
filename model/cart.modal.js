const { default: mongoose } = require("mongoose");

const cartSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Cart', cartSchema);