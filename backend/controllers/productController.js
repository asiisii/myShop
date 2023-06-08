import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc   Get all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); //this will find all the products
  res.send(products);
});

// @desc   Get single product
// @route  GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id); //this will find the product by id
  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error('Product not found');
});

export { getProducts, getProductById };
