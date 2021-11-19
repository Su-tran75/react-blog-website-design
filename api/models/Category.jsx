const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Category", CategorySchema);