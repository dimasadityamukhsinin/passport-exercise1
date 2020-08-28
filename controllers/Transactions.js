const Transactions = require('../Models/Transactions');
const Carts = require('../Models/Carts');
const Products = require('../Models/Products');

module.exports = {
    getAll : async (req, res) => {
        try{
            const transactions = await Transactions.find({})
            .populate('id_user', '-password')
            .populate({ path: 'id_product'})
            .populate({ path:'id_cart'})
          
            if(transactions){
                res.send({
                    message: 'get all data',
                    data: transactions
                })
            } else {
                res.status(400).json({
                    message: 'failed to get data'
                })
            }
        }
        catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    },
    detail : (req,res) => {
        const {id} = req.params;
        Transactions.findOne({
            '_id': id
        })
        .populate('id_user', '-password')
        .populate('id_product')
        .populate('id_cart')
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
    update : (req, res) => {
        const {id} = req.params;
        Transactions.findOneAndUpdate(
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
    createOne: async (req, res) => {
        try {
            const {id_user, id_product, id_cart, status_transaction} = req.body;
            const cart = await Carts.findOne({
                '_id': id_cart
            });
            const product = await Products.findOne({
                '_id': id_product
            });
            const newTransaction = await Transactions
            .create({
                id_user,
                id_product,
                id_cart,
                status_transaction,
                total_price : cart.quantity * product.price
            })
            if(newTransaction) {
                res.status(200).json({
                    message: `success add`,
                    newTransaction
                })
            } else {
                res.status(400).json({
                    message: `failed`
                })
            }
        }
        catch(error) {
            console.log(error);
        }
    }
}
