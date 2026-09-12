export const getProducts = (req, res) => {
  res.json({
    message: "All products",
  });
};

export const getProduct = (req, res) => {
  res.json({
    message: `Product ${req.params.id}`,
  });
};

export const createProduct = (req, res) => {
  res.json({
    message: "Product created",
    product: req.body,
  });
};