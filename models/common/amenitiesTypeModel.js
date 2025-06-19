const mongoose = require("mongoose");


const amenitiesTypeSchema  = new mongoose.Schema(
  {
   amenitiesName: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AmenitiesCategory", // 👈 referencing the category collection
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AmenitiesTypeModel = mongoose.model("AmenitiesType", amenitiesTypeSchema );

module.exports = AmenitiesTypeModel;
