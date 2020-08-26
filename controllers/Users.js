const Users = require('../Models/Users');
const users = require('../../sql-exercise2/controller/users');

module.exports = {
    getAllData : (req, res) => {
        Users.find()
        .then(result => {
            res.send({
                message: 'get All data',
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'failed'
            })
        })
    },
    detail : (req,res) => {
        const {id} = req.params;
        Users.findOne({
            '_id': id
        })
        .then(result => {
            res.status(200).send({
                message: "Get data user",
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({
                message: "Internal server error",
                status: 500,
            })
        })
    },
    addOne: (req, res) => {
        const {fullname, username, email, password, address } = req.body
        Users.create({
            fullname,
            username,
            email,
            password,
            address
        }, (error, result) => {
            if(error){
                res.send({
                    message: "error",
                    error
                })
            }
            else {
                res.send({
                    message: "success add user", 
                    result
                })
            }
        })
    },
    update : (req, res) => {
        const {id} = req.params;
        const {fullname, username, email, password, address} = req.body;
        Users.findOneAndUpdate(
            { _id : id}, 
                req.body
            , (error, result) => {
                if(error){
                    res.send({
                        message: "error"
                    })
                }
                else {
                    res.send({
                        message: "success",
                    })
                }
            }
        )
    },
    deleteUser : (req, res) => {
        const {id} = req.params;
        Users.deleteOne(
            {
                _id : id
            },
            (error, result) => {
                if(error){
                    res.send({
                        message: "error"
                    })
                }
                else {
                    res.send({
                        message: "success",
                        result
                    })
                }
            }
        )
    }
}