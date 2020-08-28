const Products = require('../Models/Products');

module.exports = {
    getAllData : (req, res) => {
        Products.find()
        .populate({path : 'images', select: '-_id'})
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
        Products.findOne({
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
        const {product_name, description, stock, price } = req.body
        Products.create({
            product_name,
            description,
            stock,
            price
        }, (error, result) => {
            if(error){
                res.send({
                    message: "error",
                    error
                })
            }
            else {
                res.send({
                    message: "success add product", 
                    result
                })
            }
        })
    },
    update : (req, res) => {
        const {id} = req.params;
        Products.findOneAndUpdate(
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
                        message: "success update",
                    })
                }
            }
        )
    },
    deleteProduct : (req, res) => {
        const {id} = req.params;
        Products.deleteOne(
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