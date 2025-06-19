const mongoose = require("mongoose");

const starCategorySchema = new mongoose.Schema(
  {
    starRating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const StarCategoryModel = mongoose.model("StarCategory", starCategorySchema);
module.exports = StarCategoryModel;
