const mongoose = require("mongoose");


const utilityTypeSchema = new mongoose.Schema(
  {
    utilityType: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const UtilityTypeModel = mongoose.model("UtilityType", utilityTypeSchema);

module.exports = UtilityTypeModel;
