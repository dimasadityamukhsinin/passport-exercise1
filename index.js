const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();

const userRouter = require('./routes/Users')
const productRouter = require('./routes/Products')
const pImageRouter = require('./routes/Product_images')
const cartRouter = require('./routes/Carts')
const transactionRouter = require('./routes/Transactions')

const app = express()

require('./config/strategies').strategies()
app.use(cors());
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

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// GOOGLE AUTHENTICATE
app.get('/auth/google', passport.authenticate('google', {scope: ['email']}));

app.get('/auth/google/callback', passport.authenticate('google'),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user)
   res.json({
       message: 'welcome'
   })
  });

// END GOOGLE AUTHENTICATE

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('we re connected'));

app.listen(process.env.PORT || 3000, ()=> {
    console.log('connected')
})