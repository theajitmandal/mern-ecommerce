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

