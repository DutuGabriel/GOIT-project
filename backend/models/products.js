import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  weight: Number,
  calories: Number,
  categories: String,
  groupBloodNotAllowed: [Boolean],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
