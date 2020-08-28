const express = require('express')
const {verifyToken} = require('../helpers/token');
const route = express.Router();

const {
    getAllData,
    detail,
    addOne,
    update,
    deleteProduct
} = require('../controllers/Products')

route.get('/product', getAllData)
route.get('/product/:id', detail)
route.post('/product', verifyToken, addOne)
route.put('/product/:id', update)
route.delete('/product/delete/:id', deleteProduct)

module.exports = route