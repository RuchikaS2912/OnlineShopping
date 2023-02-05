const express = require("express");
const {
  getCategories,
  newCategory,
  deleteCategory,
  saveAttributes,
} = require("../controllers/categoryController");
const router = express.Router();

router.get("/", getCategories);
router.post("/", newCategory);
router.delete("/:category", deleteCategory);
router.post("/attributes", saveAttributes);

module.exports = router;
