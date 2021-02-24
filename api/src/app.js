const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/product');
const productsRoutes = require('./routes/products');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connection to MongoDB success.'))
    .catch(() => console.log('Connection to MongoDB failed.'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/products', productsRoutes);

module.exports = app;