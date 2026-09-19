import Product from "../model/productModel.js";

// to create new product
export const postProduct = async (req, res) => {
  try {
    const product = await Product.create({
      // modelName: req.body.frontend/postman variable name
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      countInStock: req.body.countInStock,
      productDescription: req.body.productDescription,
      productImage: req.body.productImage,
      productRating: req.body.productRating,
      category: req.body.category
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// to show all product
export const showProduct = async (req, res) => {
  try {
    const product = await Product.find().populate('category')
    if (!product) {
      return res.status(400).json({ error: 'Something went wrong' })
    }
    res.send(product)

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// to fetch single product
// to show category details
export const productDetails = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category')
  if (!product) {
    return res.status(400).json({ error: 'Something went wrong' })
  }
  res.send(product)
}