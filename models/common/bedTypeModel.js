const mongoose = require("mongoose");


const bedTypeSchema = new mongoose.Schema(
  {
    bedType: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const BedTypeModel = mongoose.model("BedType", bedTypeSchema);

module.exports = BedTypeModel;
