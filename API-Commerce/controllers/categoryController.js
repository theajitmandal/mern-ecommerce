export const helloFunction = (req, res) => {
  res.send('This is a hello function controller')
}

import Category from "../model/categoryModel.js"

// export const postCategory = async (req, res) => {
//     let category = new Category(req.body)
//     category = await category.save()
//     if(!category){
//         return res.status(400).json({error: 'Something went wrong'})
//     }
// };

// to post category
export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const category = await Category.create({
      name,
      description,
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// to show all category
export const showCategory = async (req, res) => {
  try {
    const category = await Category.find()
    if (!category) {
      return res.status(400).json({ error: 'Something went wrong' })
    }
    res.send(category)

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// to show category details
export const categoryDetails = async (req, res) => {
  const category = await Category.findById(req.params.id)
  if (!category) {
    return res.status(400).json({ error: 'Something went wrong' })
  }
  res.send(category)
}

// to update category
export const updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description
    },
    { new: true }
  )
  if (!category) {
    return res.status(400).json({ error: 'Something went wrong' })
  }
  res.send(category)
}

// to delete category
export const deleteCategory = (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then((category) => {
      if (!category) {
        return res.status(404).json({
          error: "Category Not Found",
        });
      }

      return res.status(200).json({
        message: "Category Deleted",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err.message,
      });
    });
};

