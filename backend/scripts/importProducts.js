import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import Product from "../models/products.js";

dotenv.config();

const rawData = JSON.parse(fs.readFileSync("./models/products.json", "utf-8"));

const products = rawData.map(({ _id, ...rest }) => rest);

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.insertMany(products);
    console.log("✅ Products imported!");
    process.exit();
  } catch (err) {
    console.error("❌ Error importing:", err.message);
    process.exit(1);
  }
};

importData();
