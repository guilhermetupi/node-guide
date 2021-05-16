const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render(
      'shop/product-list', 
      { 
        pageTitle: 'All products', 
        prods: products, 
        path: '/products',
      }
    );
  });  
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render(
      'shop/index', 
      { 
        pageTitle: 'Shop', 
        prods: products, 
        path: '/',
      }
    );
  });
}

exports.getCart = (req, res, next) => {
  res.render(
    'shop/cart', 
    { 
      pageTitle: 'Your cart', 
      path: '/cart',
    }
  );
}

exports.getOrders = (req, res, next) => {
  res.render(
    'shop/orders', 
    { 
      pageTitle: 'Your orders', 
      path: '/orders',
    }
  );
}

exports.getCheckout = (req, res, next) => {
  res.render(
    'shop/checkout', 
    { 
      pageTitle: 'Checkout', 
      path: '/checkout',
    }
  );
}