const { default: mongoose } = require("mongoose");


const serviceSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    paragraph1:{
        type: String,
        required: true
    },
    paragraph2:{
        type: String,
        required: true
    },
    icon:{
        type: String,
        required: true
    },
    coverPhoto: {
        type: String,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Services', serviceSchema)