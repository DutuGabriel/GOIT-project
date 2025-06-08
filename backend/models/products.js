import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  weight: Number,
  calories: Number,
  category: String,
  groupBloodNotAllowed: {
    1: Boolean,
    2: Boolean,
    3: Boolean,
    4: Boolean,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
