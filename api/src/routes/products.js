const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/product');

router.get('/', productsCtrl.getAllProducts);
router.post('/', productsCtrl.createProduct);
router.get('/:id', productsCtrl.getOneProduct);
router.put('/:id', productsCtrl.editProduct);
router.delete('/:id', productsCtrl.deleteProduct);

module.exports = router;