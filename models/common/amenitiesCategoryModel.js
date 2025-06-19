const mongoose = require("mongoose");


const amenitiesCategorySchema = new mongoose.Schema(
  {
    amenitiesCategory: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const AmenitiesCategoryModel = mongoose.model("AmenitiesCategory", amenitiesCategorySchema);
module.exports = AmenitiesCategoryModel;
