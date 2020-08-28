const Carts = require('../Models/Carts');

module.exports = {
    getAllData : async (req, res) => {
        try {
            const carts = await Carts.find()
            .populate({path: 'id_user', select: 'username'})
            .populate({path:'id_product', select:'product_name'})
            if(carts){
                res.status(200).json({
                    message: 'Success to get All data',
                    carts
                })
            } else {
                res.status(400).json({
                    message: 'Failed to get all data'
                })
            }
        }
        catch(error){
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
      
        
    },
    detail : (req,res) => {
        const {id} = req.params;
        Carts.findOne({
            '_id': id
        })
        .populate('id_user', '-password')
        .populate('id_product')
        .then(result => {
            res.status(200).send({
                message: "Get data",
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
    addOne: async (req, res) => {
        try {
            const {id_user, id_product, quantity, status_cart} = req.body
        const newCarts = await Carts.create({
            id_user,
            id_product,
            quantity,
            status_cart
        })
        if(newCarts) {
            res.send({
                message: 'success',
                newCarts,
            })
        } else {
            res.send({
                message: 'error',
            })
        }
    } catch (error) {
        console.log(error)
    }
        
    },
    update : (req, res) => {
        const {id} = req.params;
        Carts.findOneAndUpdate(
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
    deleteCart : (req, res) => {
        const {id} = req.params;
        Carts.deleteOne(
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
