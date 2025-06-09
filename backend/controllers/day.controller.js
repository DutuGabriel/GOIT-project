import Day from "../models/day.js";

export const addProductToDay = async (req, res) => {
  const { date, productId, weight } = req.body;
  const userId = req.user;

  console.log("REQ BODY:", req.body);
  console.log("USER ID:", userId);

  try {
    let day = await Day.findOne({ userId, date });

    if (!day) {
      day = new Day({ date, userId, consumedProducts: [] });
    }

    day.consumedProducts.push({ productId, weight });
    await day.save();

    res.status(201).json(day);
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: "Error adding product to the day." });
  }
};

export const deleteProductFromDay = async (req, res) => {
  const { date, productId } = req.body;
  const userId = req.user;

  try {
    const day = await Day.findOne({ userId, date });

    if (!day) {
      return res.status(404).json({ message: "Day not found." });
    }

    day.consumedProducts = day.consumedProducts.filter(
      (item) => item.productId.toString() !== productId
    );

    await day.save();
    res.json(day);
  } catch (err) {
    res.status(500).json({ error: "Error deleting product from the day." });
  }
};

export const getDayInfo = async (req, res) => {
  const userId = req.user;
  const { date } = req.params;

  try {
    const day = await Day.findOne({ userId, date }).populate(
      "consumedProducts.productId"
    );

    if (!day) {
      return res.status(404).json({ message: "Day not found." });
    }

    res.json(day);
  } catch (err) {
    res.status(500).json({ error: "Error fetching day information." });
  }
};
