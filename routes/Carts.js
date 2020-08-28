const express = require('express')
const {verifyToken} = require('../helpers/token');
const route = express.Router();

const {
    getAllData,
    addOne,
    detail,
    update,
    deleteCart
} = require('../controllers/Carts')

route.get('/cart', verifyToken, getAllData)
route.post('/cart', verifyToken, addOne)
route.get('/cart/:id', detail)
route.put('/cart/:id', update)
route.delete('/cart/delete/:id', deleteCart)

module.exports = route