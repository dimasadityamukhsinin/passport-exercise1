const express = require('express')
const {verifyToken} = require('../helpers/token');
const route = express.Router();

const {
    getAllData,
    addOne,
    detail,
    update,
    deletePImage
} = require('../controllers/Product_images')

route.get('/product_images', getAllData)
route.post('/product_images', verifyToken, addOne)
route.get('/product_images/:id', detail)
route.put('/product_images/:id', update)
route.delete('/product_images/delete/:id', verifyToken, deletePImage)

module.exports = route