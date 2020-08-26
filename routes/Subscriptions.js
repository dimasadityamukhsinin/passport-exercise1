const express = require('express')
const route = express.Router();

const {
    getAllSubs,
    addOne,
    detail
} = require('../controllers/Subscriptions')

route.get('/subs', getAllSubs)
route.post('/subs', addOne)
route.get('/subs/:id', detail)

module.exports = route