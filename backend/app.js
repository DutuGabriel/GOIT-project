import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";

import authRoutes from "./routes/auth.routes.js";
//
import authMiddleware from "./middlewares/authMiddleware.js";
//
import productsRoutes from "./routes/products.routes.js";
import dailyRateRoutes from "./routes/dailyRate.routes.js";
import dayRoutes from "./routes/day.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/auth", authRoutes);
//
app.use("/api/test", authMiddleware);
//
app.use("/api/products", productsRoutes);
app.use("/api/daily-rate", dailyRateRoutes);
app.use("/api", dayRoutes);

export default app;
