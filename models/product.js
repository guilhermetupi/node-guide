const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename), 
  'data', 
  'products.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent)=> {
      if(err){
        return cb([]);
      }
      cb(JSON.parse(fileContent));
    });
}

module.exports = class Product {
  constructor(title, price, description, imageURL){
    this.title = title;
    this.price = parseFloat(price).toFixed(2);
    this.description = description;
    this.imageURL = imageURL;
  }

  save(){
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(
        p, 
        JSON.stringify(products), 
        (err) => console.log(err)
      );
    });
  }

  static fetchAll(cb){
    getProductsFromFile(cb);
  }
}