const mongoose = require("mongoose");

const cancellationTypeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      enum: [
        "Free cancellation till 24 hours before check-in",
        "Free cancellation till 48 hours before check-in",
        "Free cancellation till 72 hours before check-in",
        "Non-refundable",
      ],
    },
    description: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const CancellationTypeModel = mongoose.model(
  "CancellationType",
  cancellationTypeSchema
);

module.exports = CancellationTypeModel;