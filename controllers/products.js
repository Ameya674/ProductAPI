const product = require('../models/product');

const getAllProducts = async (req, res) => {

    const { brand } = req.query;
    const queryObject = {};

    if (brand) {
        queryObject.brand = brand;
    }

    const productData = await product.find(queryObject);
    res.status(200).json({productData});
}

const getAllProductsTesting = async (req, res) => {
    const productData = await product.find( req.query );
    res.status(200).json({productData});
    console.log('Query: ', req.query);
}

module.exports = { getAllProducts, getAllProductsTesting };