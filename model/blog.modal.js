const { default: mongoose } = require("mongoose");

const blogSchema = mongoose.Schema({
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
    coverImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subtitle1: {
        type: String,
        required: true
    },
    paragraph1: {
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
    subtitle2: {
        type: String,
        required: true
    },
    paragraph2: {
        type: String,
        required: true
    },
    paragraph3: {
        type: String,
        required: true
    },
    paragraph4: {
        type: String,
        required: true
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Blog', blogSchema)