import express from "express";

import {
  addProductToDay,
  deleteProductFromDay,
  getDayInfo,
} from "../controllers/day.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/validationMiddleware.js";
import {
  addProductSchema,
  deleteProductSchema,
} from "../validation/schemas.js";
import { validateParams } from "../middlewares/validationMiddleware.js";
import { getDayInfoSchema } from "../validation/schemas.js";

const router = express.Router();

/**
 *  @swagger
 * /api/day:
 *   post:
 *     summary: Add a product to a specific day
 *     tags: [Day]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 example: "2025-06-09"
 *               productId:
 *                 type: string
 *               weight:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product added
 */
router.post(
  "/day",
  authMiddleware,
  validate(addProductSchema),
  addProductToDay
);

/**
 * @swagger
 * /api/day:
 *   delete:
 *     summary: Remove a product from a specific day
 *     tags: [Day]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 example: "2025-06-09"
 *               productId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product removed
 */
router.delete(
  "/day",
  authMiddleware,
  validate(deleteProductSchema),
  deleteProductFromDay
);

/**
 * @swagger
 * /api/day/{date}:
 *   get:
 *     summary: Get all data for a specific day
 *     tags: [Day]
 *     parameters:
 *       - in: path
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *         example: 2025-06-09
 *     responses:
 *       200:
 *         description: Day info returned
 */
router.get(
  "/day/:date",
  authMiddleware,
  validateParams(getDayInfoSchema),
  getDayInfo
);

export default router;
