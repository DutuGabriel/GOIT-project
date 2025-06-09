import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import {
  getProductById,
  getProductsByCategory,
  searchProducts,
  getAllCategories,
  getAllProducts,
} from "../controllers/products.controller.js";
import {
  getProductByIdSchema,
  getProductsByCategorySchema,
  searchProductsSchema,
} from "../validation/schemas.js";
import {
  validateParams,
  validateQuery,
} from "../middlewares/validationMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/products/search:
 *   get:
 *     summary: Search products by query string
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         example: "apple"
 *     responses:
 *       200:
 *         description: Matching products returned
 */
router.get("/search", validateQuery(searchProductsSchema), searchProducts);

/**
 * @swagger
 * /api/products/categories:
 *   get:
 *     summary: Get all product categories
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of categories
 */
router.get("/categories", authMiddleware, getAllCategories);

/**
 * @swagger
 * /api/products/category/{category}:
 *   get:
 *     summary: Get products by category
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         example: cereals
 *     responses:
 *       200:
 *         description: Products by category
 */
router.get(
  "/category/:category",
  authMiddleware,
  validateParams(getProductsByCategorySchema),
  getProductsByCategory
);

/**
 * @swagger
 * /api/products/{productId}:
 *   get:
 *     summary: Get product details by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product found
 */
router.get(
  "/:productId",
  authMiddleware,
  validateParams(getProductByIdSchema),
  getProductById
);

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all products
 */
router.get("/", authMiddleware, getAllProducts);

export default router;
