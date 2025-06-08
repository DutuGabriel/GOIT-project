import express from "express";
import { register, login } from "../controllers/auth.controller.js";
//
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Logout successful" });
});
//test
router.get("/protected", authMiddleware, (req, res) => {
  res
    .status(200)
    .json({ message: `Hello user ${req.user}, you're authenticated!` });
});

export default router;
