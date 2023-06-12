import express from 'express';
const router = express.Router();
// import asyncHandler from '../middleware/asyncHandler.js';
// import productModel from '../models/productModel.js';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/top').get(getTopProducts); // before /:id so it wont look for top as an "/:id"
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.route('/:id/reviews').post(protect, createProductReview);

export default router;
