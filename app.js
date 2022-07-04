const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRouter = require('./router/user.router');
const productRouter = require('./router/product.router');
const cartRouter = require('./router/cart.route');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})


//Route not found
app.use((req, res, next) => {
    res.status(404).json({message: 'Bad Request'});
})


//Handling server error
app.use((err, req, res, next) => {
    res.status(500).json({message: 'Server error'});
})


module.exports = app;