const path = require('path');
const express = require("express");

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle:'Add Product',
     activeAddProduct:true,
     addProductCSS:true,
     path:'/admin/add-product'});
    // res.sendFile(path.join(rootDir,'views','add-product.html'));

  });

router.post("/add-product", (req, res, next) => {
  console.log('admin.js befor:', req.body);
  products.push({title: req.body.title})
  console.log('admin.js after:',products)
  res.redirect("/");
});

// module.exports = router;
exports.routes = router;

exports.products= products;
