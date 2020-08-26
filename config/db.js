const mongoose = require('mongoose')


const url= "mongodb://127.0.0.1:27017/netpliks";
// const database = "impactbyte";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;


module.exports = db;