const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/product');

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

app.post('/api/products', (req, res, next) => {
    const product = new Product({
        ...req.body
    });
    product.save()
        .then(newProduct => res.status(201).json({ product: newProduct }))
        .catch(error => res.status(400).json({ error }));
});

app.get('/api/products/:id', (req, res, next) => {
    Product.findOne({ _id: req.params.id })
        .then(productFound => res.status(200).json({ product: productFound}))
        .catch(error => res.status(404).json({ error }));
});

app.put('/api/products/:id', (req, res, next) => {
    Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(201).json({ message: 'Modified!'}))
        .catch(error => res.status(400).json({ error }));
});

app.use('/api/products', (req, res, next) => {
    Product.find()
        .then(allProducts => res.status(200).json({ products: allProducts }))
        .catch(error => res.status(400).json({ error }));
});

module.exports = app;