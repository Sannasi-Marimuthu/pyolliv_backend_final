const mongoose = require("mongoose");

const roomSizeUnitSchema = new mongoose.Schema(
  {
    unitName: {
      type: String,
      enum: ["sqft", "sqm"],
    },
    label: {
      type: String,
      trim: true, // e.g., "Square Feet"
    },
  },
  {
    timestamps: true,
  }
);

const RoomSizeUnitModel = mongoose.model("RoomSizeUnit", roomSizeUnitSchema);
module.exports = RoomSizeUnitModel;
