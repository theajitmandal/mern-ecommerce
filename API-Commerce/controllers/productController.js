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
      productImage: req.file.path,
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

// to update product
// export const updateCategory = async (req, res) => {
//   const category = await Category.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       description: req.body.description
//     },
//     { new: true }
//   )
//   if (!category) {
//     return res.status(400).json({ error: 'Something went wrong' })
//   }
//   res.send(category)
// }

export const updateProduct = async(req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      countInStock: req.body.countInStock,
      productDescription: req.body.productDescription,
      productImage: req.body.productImage,
      productRating: req.body.productRating,
      category: req.body.category
    },
    {new: true}
  )
  if(!product){
    return res.status(400).json({error: 'Something went wrong'})
  }
  res.send(product)
}

// to delete product
export const deleteProduct= (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          error: "Product Not Found",
        });
      }

      return res.status(200).json({
        message: "Product Deleted",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err.message,
      });
    });
};