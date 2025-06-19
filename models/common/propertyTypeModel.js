const mongoose = require("mongoose");


const propertyTypeSchema = new mongoose.Schema(
  {
    propertyType: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const PropertyTypeModel = mongoose.model('PropertyType', propertyTypeSchema);
module.exports = PropertyTypeModel;