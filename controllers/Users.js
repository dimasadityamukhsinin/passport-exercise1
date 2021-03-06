const Users = require('../Models/Users');
const users = require('../../sql-exercise2/controller/users');
const {createToken} = require('../helpers/token');

module.exports = {
    login: async (req, res) => {
        try {
            // find one
            const registeredUser = await Users.findOne({email: req.body.email}) // sukses : obj / gagal: null
            // check password
            if(registeredUser.password === req.body.password){
                const dataUser = {
                    id: registeredUser._id,
                    username: registeredUser.username,
                    email: registeredUser.email
                }
                // user login => kasih token
                const token = createToken(dataUser)
                console.log(token)

                res.status(200).json({
                    message: "Selamat datang",
                    token,
                    user: dataUser
                })
            } else {
                res.status(400).json({
                    message: "Password Salah"
                })
            }
        }
        catch(error) {
            console.log(error)
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    },
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
        const {fullname, username, email, phone, password, address } = req.body
        Users.create({
            fullname,
            username,
            email,
            phone,
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