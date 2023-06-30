require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const products = require('./routes/products');
const connectDb = require('./db/connect');

app.get('/', (req, res) => {
    res.send('Mahesh dalle')
})

app.use('/api/products', products);

const start = async () => {
    try {
        await connectDb(process.env.URL);
        app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

