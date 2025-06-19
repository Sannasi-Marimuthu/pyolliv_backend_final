const mongoose = require("mongoose");

const checkInOutPolicySchema = new mongoose.Schema(
  {
    checkInTime: {
      type: String, // e.g., "12:00 PM"
      trim: true,
    },
    checkOutTime: {
      type: String, // e.g., "11:00 AM"
      trim: true,
    },
    is24HourCheckInOut: {
      type: Boolean, // Yes = true, No = false
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const CheckInOutPolicyModel = mongoose.model(
  "CheckInOutPolicy",
  checkInOutPolicySchema
);

module.exports = CheckInOutPolicyModel;