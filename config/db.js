const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;


module.exports = db;