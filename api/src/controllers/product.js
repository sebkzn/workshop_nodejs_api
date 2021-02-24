const Product = require('../models/product');

exports.createProduct = (req, res, next) => {
    const product = new Product({
        ...req.body
    });
    product.save().then(
        (newProduct) => {
            res.status(201).json({
                product: newProduct
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneProduct = (req, res, next) => {
    Product.findOne({
        _id: req.params.id
    }).then(
        (productFound) => {
            res.status(200).json({
                product: productFound
            });
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.editProduct = (req, res, next) => {
    Product.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    ).then(
        () => {
            res.status(201).json({
                message: 'Modified!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllProducts = (req, res, next) => {
    Product.find().then(
        (allProducts) => {
            res.status(200).json({
                products: allProducts
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};