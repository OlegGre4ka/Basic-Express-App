const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "products.json");

const getProductFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else{
        cb(JSON.parse(fileContent));
      }
    });
  }


module.exports = class Product {
  
  constructor(t) {
    this.title = t;
  }

  save() {
    // fs.readFile(p, (err, fileContent) => {
    //   let products = [];
      // if (!err) {
      //   products = JSON.parse(fileContent);
      // }
     getProductFromFile(products =>{
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err,'err writeFile');
      });
    });
     }

  static fetchAll(cb) {
     getProductFromFile(cb);
  }
};
