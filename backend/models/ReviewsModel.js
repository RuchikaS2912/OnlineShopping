const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
  user: {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
  },
});

const Reviews = mongoose.model("Reviews", reviewsSchema);
module.exports = Reviews;
