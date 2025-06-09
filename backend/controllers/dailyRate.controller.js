import Product from "../models/products.js";
import User from "../models/user.js";

export const calculateDailyRatePublic = async (req, res) => {
  try {
    const { height, age, currentWeight, desiredWeight, bloodType } = req.body;

    const recommendedCalories = Math.round(
      10 * currentWeight +
        6.25 * height -
        5 * age -
        161 -
        10 * (currentWeight - desiredWeight)
    );

    const notAllowedProducts = await Product.find({
      [`groupBloodNotAllowed.${bloodType}`]: true,
    }).select("title categories -_id");

    res.status(200).json({ recommendedCalories, notAllowedProducts });
  } catch (error) {
    console.error("Daily rate error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getPrivateDailyRate = async (req, res) => {
  try {
    const { height, age, currentWeight, desiredWeight, bloodType } = req.body;

    const dailyRate = Math.round(
      10 * currentWeight +
        6.25 * height -
        5 * age -
        161 -
        10 * (currentWeight - desiredWeight)
    );

    const index = Number(bloodType);
    const notAllowedProducts = await Product.find({
      [`groupBloodNotAllowed.${index}`]: true,
    }).select("title categories -_id");

    await User.findByIdAndUpdate(req.user.id, {
      dailyRate,
      notAllowedProducts: notAllowedProducts.map((p) => p._id),
    });

    res.status(200).json({
      recommendedCalories: dailyRate,
      notAllowedProducts,
    });
  } catch (error) {
    console.error("Private daily rate error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
