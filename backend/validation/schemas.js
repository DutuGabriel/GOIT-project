import Joi from "joi";

export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const dailyRateSchema = Joi.object({
  height: Joi.number().positive().required(),
  age: Joi.number().positive().required(),
  currentWeight: Joi.number().positive().required(),
  desiredWeight: Joi.number().positive().required(),
  bloodType: Joi.number().valid(0, 1, 2, 3).required(),
});

export const addProductSchema = Joi.object({
  date: Joi.string().isoDate().required(),
  productId: Joi.string().required(),
  weight: Joi.number().positive().required(),
});

export const deleteProductSchema = Joi.object({
  date: Joi.string().isoDate().required(),
  productId: Joi.string().required(),
});

export const getDayInfoSchema = Joi.object({
  date: Joi.string().isoDate().required(),
});

export const getProductByIdSchema = Joi.object({
  productId: Joi.string().length(24).hex().required(),
});

export const getProductsByCategorySchema = Joi.object({
  category: Joi.string().min(1).required(),
});

export const searchProductsSchema = Joi.object({
  query: Joi.string().min(1).required(),
});
