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

// export const createProduct = (req, res) => {
//   res.json({
//     message: "Product created",
//     product: req.body,
//   });
// };

export const createProduct = async (req, res) => { try { const { name, price, description, category, stock } = req.body; const product = await Product.create({ name, price, description, category, stock, }); res.status(201).json(product); } catch (error) { res.status(500).json({ message: error.message, }); } };