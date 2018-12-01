const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
     pageTitle:'Add Product',
     activeAddProduct:true,
     addProductCSS:true,
     path:'/admin/add-product'});
  }
exports.postAddProduct =  (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    console.log('admin.js after:',product)
    res.redirect("/");
  }
exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop',{
       prods: products,
       pageTitle:'Shop', 
       hasProduct: products.length>0,
       activeShop:true,
       cardCSS:true,
       path:'/'});
  }

