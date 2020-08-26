const express = require('express')
const route = express.Router();

const {
    getAllData,
    addOne,
    detail,
    update,
    deleteUser
} = require('../controllers/Users')

route.get('/users', getAllData)
route.post('/users/register', addOne)
route.get('/users/:id', detail)
route.put('/users/:id', update)
route.delete('/users/:id', deleteUser)

module.exports = route