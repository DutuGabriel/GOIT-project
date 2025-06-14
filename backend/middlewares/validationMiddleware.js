export const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export const validateParams = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.params);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

export const validateQuery = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.query);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};
