const { default: mongoose } = require("mongoose");

const orderSchema = mongoose.Schema({
  id:{
    type: String,
    require: true
  },
  name:{
    type: String,
    require: true
  },
  title:{
    type: String,
    require: true
  },
  quantity:{
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true
  },
  price:{
    type: String,
    require: true
  },
  createdOn:{
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Order', orderSchema)