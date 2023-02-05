const Category = require("../models/CategoryModel");
const { copy } = require("../routes/categoryRoutes");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: "asc" }).orFail();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const newCategory = async (req, res, next) => {
  try {
    res.send(!!req.body);
    const { category } = req.body;
    if (!category) {
      res.status(400).json({ error: "category is required" });
    }
    const categoryExists = await Category.findOne({ name: category });
    if (categoryExists) {
      res.status(400).json({ error: "category already exists" });
    } else {
      const newCategory = new Category({ name: category });
    }

    res.send(category);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    if (req.params.category !== "Choose category") {
      const categoryExists = Category.findOne({
        name: decodeURIComponent(req.params.category),
      }).orFail();
      await categoryExists.remove();
      return res.status(200).json({ message: "category deleted" });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
};

const saveAttributes = async (req, res, next) => {
  const { key, val, categoryChosen } = req.body;
  if (!key || !val || !categoryChosen) {
    return res
      .status(400)
      .json({ error: "key,value and category are required" });
  }
  try {
    const category = categoryChosen.split("/")[0];
    console.log(category);
    const categoryExists = await Category.findOne({ name: category }).orFail();
    if (categoryExists.attrs.length > 0) {
      let keyDoesNotExistInDatabase = true;
      console.log(categoryExists.attrs);
      categoryExists.attrs.map((item, idx) => {
        if (item.key === key) {
          keyDoesNotExistInDatabase = false;
          let copyAttributesValues = [...categoryExists.attrs[idx].value];
          copyAttributesValues.push(val);
          let newAttributeValues = [...new Set(copyAttributesValues)];
          categoryExists.attrs[idx].value = newAttributeValues;
        }
      });
      if (keyDoesNotExistInDatabase) {
        categoryExists.attrs.push({ key: key, value: [val] });
      }
    } else {
      categoryExists.attrs.push({ key: key, value: [val] });
    }

    await categoryExists.save();
    let cat = await Category.find({}).sort({ name: "asc" });
    return res.status(201).json({ categoriesUpdated: cat });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  newCategory,
  deleteCategory,
  saveAttributes,
};
