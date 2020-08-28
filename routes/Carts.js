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
route.get('/cart/:id', verifyToken, detail)
route.put('/cart/:id', verifyToken, update)
route.delete('/cart/delete/:id', verifyToken, deleteCart)

module.exports = route