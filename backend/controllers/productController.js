const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const getProducts = asyncHandler(async(req,res,next) => {
    const products = await Product.find({});
    res.json(products);
})
const getProductById = asyncHandler(async (req, res,next) => {
      const id = req.params.id;
      const product = await Product.findById(id);
      if (product) {
        res.json(product);
      } else {
        res.status(404);
        throw new Error("Product not found");
      }
});
module.exports = { getProducts, getProductById };