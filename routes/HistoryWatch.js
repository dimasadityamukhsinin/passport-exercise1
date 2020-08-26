const express = require('express')
const route = express.Router();

const {
    getAll,
    createOne,
    detail,
    deleteHistory
} = require('../controllers/HistoryWatch')

route.get('/history', getAll)
route.post('/history', createOne)
route.get('/history/:id', detail)
route.delete('/history/delete/:id', deleteHistory)

module.exports = route