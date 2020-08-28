const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')

const userRouter = require('./routes/Users')
const productRouter = require('./routes/Products')
const pImageRouter = require('./routes/Product_images')
const cartRouter = require('./routes/Carts')
const transactionRouter = require('./routes/Transactions')

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter)
app.use('/', productRouter)
app.use('/', pImageRouter)
app.use('/', cartRouter)
app.use('/', transactionRouter)

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('we re connected'));

app.listen(8000, ()=> {
    console.log('connected')
})