const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render(
    'admin/add-product', 
    { 
      pageTitle: 'Add Product', 
      path: '/admin/add-products',
    }
  );
}

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const product = new Product(title, price, description, imageURL);
  product.save()
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render(
      'admin/product-list', 
      { 
        pageTitle: 'All products', 
        prods: products, 
        path: '/product-list',
      }
    );
  }); 
}