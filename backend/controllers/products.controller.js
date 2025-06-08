import Product from "../models/products.js";

export const searchProducts = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Query string is required" });
  }

  const regex = new RegExp(query, "i"); // case-insensitive
  const products = await Product.find({ title: regex });

  res.json(products);
};
