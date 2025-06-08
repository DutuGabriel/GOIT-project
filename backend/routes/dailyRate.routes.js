import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import { calculateDailyRatePublic } from "../controllers/dailyRate.controller.js";
import { getPrivateDailyRate } from "../controllers/dailyRate.controller.js";

const router = express.Router();

router.post("/public", calculateDailyRatePublic);
router.post("/", authMiddleware, getPrivateDailyRate);

export default router;
