const express = require('express')
const {verifyToken} = require('../helpers/token');
const route = express.Router();

const {
    login,
    getAllData,
    addOne,
    detail,
    update,
    deleteUser
} = require('../controllers/Users')

route.post('/users/login', login)
route.get('/users', getAllData)
route.post('/users/register', addOne)
route.get('/users/:id', detail)
route.put('/users/:id', update)
route.delete('/users/:id', verifyToken, deleteUser)

module.exports = route