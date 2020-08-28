const express = require('express')
const {verifyToken} = require('../helpers/token');
const route = express.Router();

const {
    getAll,
    detail,
    createOne,
    update
} = require('../controllers/Transactions')

route.get('/transaction', verifyToken, getAll)
route.get('/transaction/:id', verifyToken, detail)
route.post('/transaction', verifyToken, createOne)
route.put('/transaction/:id', verifyToken, update)

module.exports = route