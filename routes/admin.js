const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();

// admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// admin/products => GET
router.post('/add-product', adminController.postAddProduct);

// admin/add-product => POST
router.get('/products', adminController.getProducts);

module.exports = router;
