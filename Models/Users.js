const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const Schema = mongoose.Schema

const userSchema = new Schema({
    provider : {
        type: String,
        required: false
    },
    providerId: {
        type: String,
        required: false
    },
    fullname: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: false
    },
    password: {
        type: String,
    },
    address : {
        type: String,
    }
}, {timestamps:true})

userSchema.plugin(findOrCreate);

const Users = mongoose.model('users', userSchema)

module.exports = Users;