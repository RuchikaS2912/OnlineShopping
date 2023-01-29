const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  path: { type: String, required: true },
});

const Images = mongoose.model("Images", imageSchema);

module.exports = Images;
