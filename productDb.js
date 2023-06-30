const connectDb = require('./db/connect');
const Product = require('./models/product');
require('dotenv').config();
const productJSON = require('./productsDb.json');

const start = async () => {
    try {
        await connectDb(process.env.URL);
        await Product.deleteMany();
        await Product.create(productJSON);
        console.log('Success');
    }catch (error) {
        console.log(error);
    }
}

start();