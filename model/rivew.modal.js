const { default: mongoose } = require("mongoose");


const rivewSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    rivew:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Rivews', rivewSchema)