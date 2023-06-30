const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be provided."],
    },
    rating: {
        type: Number,
        default: 4.0,
    },
    brand: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Product', productSchema);