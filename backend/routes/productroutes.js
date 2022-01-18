const express = require('express');
const router = express.Router();
const {getProducts,getProductById} =require('../controllers/productController')

//fetch all products
//GET api/products/
router.route('/').get(getProducts);
router.route("/:id").get(getProductById);

module.exports = router;