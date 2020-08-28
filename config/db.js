const mongoose = require('mongoose')


const url= "mongodb+srv://dimasadityamukhsinin:fevidi12xq38@impactbyte.nzc2o.mongodb.net/impact_store";
// const database = "impactbyte";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;


module.exports = db;