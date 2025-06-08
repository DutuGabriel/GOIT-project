import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
//
import authMiddleware from "./middlewares/authMiddleware.js";
//
import productsRoutes from "./routes/products.routes.js";
import dailyRateRoutes from "./routes/dailyRate.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
//
app.use("/api/test", authMiddleware);
//
app.use("/api/products", productsRoutes);
app.use("/api/daily-rate", dailyRateRoutes);

export default app;
