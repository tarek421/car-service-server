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
    header: {
        type: String,
        required: true
    },
    description1:{
        type: String,
        required: true
    },
    description2:{
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
    photoUrl1: {
        type: String,
        required: true
    },
    photoUrl2: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Services', serviceSchema)