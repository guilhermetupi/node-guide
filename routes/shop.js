const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render(
    'shop', 
    { 
      pageTitle: 'Shop', 
      prods: products, 
      path: '/shop',
      hasProducts: products.length > 0,
      activeShop: true, 
      productCSS: true,
    }
  );
});

module.exports = router;
