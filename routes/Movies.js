const express = require('express')
const route = express.Router();

const {
    getAllData,
    addOne,
    detail,
    update
} = require('../controllers/Movies')

route.get('/movies', getAllData)
route.post('/movies', addOne)
route.get('/movies/:id', detail)
route.put('/movies/:id', update)

module.exports = route