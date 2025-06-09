import mongoose from "mongoose";

const consumedProductSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  weight: { type: Number, required: true },
});

const daySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  consumedProducts: [consumedProductSchema],
});

export default mongoose.model("Day", daySchema);
