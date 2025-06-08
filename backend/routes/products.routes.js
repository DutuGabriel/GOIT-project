import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import { searchProducts } from "../controllers/products.controller.js";
import { getProductById } from "../controllers/products.controller.js";
import { getAllProducts } from "../controllers/products.controller.js";
import { getProductsByCategory } from "../controllers/products.controller.js";
import { getAllCategories } from "../controllers/products.controller.js";

const router = express.Router();

router.get("/search", searchProducts);
router.get("/categories", authMiddleware, getAllCategories);
router.get("/category/:category", authMiddleware, getProductsByCategory);
router.get("/:productId", authMiddleware, getProductById);
router.get("/", authMiddleware, getAllProducts);

export default router;
