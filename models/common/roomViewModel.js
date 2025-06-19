const mongoose = require("mongoose");


const roomViewSchema = new mongoose.Schema(
  {
    roomView: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const RoomViewModel = mongoose.model("RoomView", roomViewSchema);

module.exports = RoomViewModel;
