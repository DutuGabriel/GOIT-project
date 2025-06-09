import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import { calculateDailyRatePublic } from "../controllers/dailyRate.controller.js";
import { getPrivateDailyRate } from "../controllers/dailyRate.controller.js";
import { validate } from "../middlewares/validationMiddleware.js";
import { dailyRateSchema } from "../validation/schemas.js";

const router = express.Router();

/**
 * @swagger
 * /api/daily-rate/public:
 *   post:
 *     summary: Calculate daily rate (public, no auth)
 *     tags: [DailyRate]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               age:
 *                 type: number
 *               height:
 *                 type: number
 *               bloodType:
 *                 type: number
 *               currentWeight:
 *                 type: number
 *               desiredWeight:
 *                 type: number
 *     responses:
 *       200:
 *         description: Daily rate calculated
 */
router.post("/public", validate(dailyRateSchema), calculateDailyRatePublic);

/**
 * @swagger
 * /api/daily-rate:
 *   post:
 *     summary: Calculate daily rate (private, with auth + DB record)
 *     tags: [DailyRate]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               age:
 *                 type: number
 *               height:
 *                 type: number
 *               bloodType:
 *                 type: number
 *               currentWeight:
 *                 type: number
 *               desiredWeight:
 *                 type: number
 *     responses:
 *       200:
 *         description: Daily rate calculated and saved
 */
router.post(
  "/",
  authMiddleware,
  validate(dailyRateSchema),
  getPrivateDailyRate
);

export default router;
