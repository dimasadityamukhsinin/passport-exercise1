const mongoose = require('mongoose');


const Schema = mongoose.Schema

const pImagesSchema = new Schema({
    id_product: {
        type: Schema.Types.ObjectId,
        ref: 'products', 
        required: true
    },
    url_image: {
        type: String,
        required: true
    }
   
}, {timestamps:true})

const PImages = mongoose.model('product_images', pImagesSchema)

module.exports = PImages;