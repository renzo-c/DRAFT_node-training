const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/admin/shop',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
    layout: "main-layout"
  });
});

module.exports = router;
