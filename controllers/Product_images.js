const PImages = require('../Models/Product_images');
const Products = require('../Models/Products');

module.exports = {
    getAllData : (req, res) => {
        PImages.find()
        .populate('id_product')
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
        PImages.findOne({
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
    addOne : async (req, res) => {
        try {
           const data = await PImages.create(
              {...req.body}
           );
           const product = await Products.findOneAndUpdate(
               {_id: req.body.id_product},
               {$push: {images: data._id}},
               { new: true}
           )
           res.status(200).send({
            message: "success",
            product
          })
        }
        catch(error){
            console.log(error);
            res.status(500).json({
                message: "Internal server error, please try again later",
            })
        }
    },
    update : (req, res) => {
        const {id} = req.params;
        PImages.findOneAndUpdate(
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
    deletePImage : (req, res) => {
        const {id} = req.params;
        PImages.deleteOne(
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