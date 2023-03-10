const mongoose = require("mongoose");
const Reviews = require("./ReviewsModel");
const Images = require("./ImageModel");

const imageSchema = mongoose.Schema({
  path: { type: String, required: true },
});

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
    },
    reviewsNumber: {
      type: Number,
    },
    sales: {
      type: Number,
      default: 0,
    },
    attrs: [{ key: { type: String }, value: { type: String } }],
    images: [imageSchema],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Reviews,
      },
    ],
  },
  { timestamp: true }
);

const Product = mongoose.model("Product", productSchema);

productSchema.index(
  { name: "text", description: "text" },
  { name: "TextIndex" }
);
productSchema.index({ "attrs.key": 1, "attrs.value": 1 });

module.exports = Product;
