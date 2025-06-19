const mongoose = require("mongoose");

const propertyOwnershipTypeSchema = new mongoose.Schema(
  {
    ownershipType: {
      type: String,
      enum: ["Own Property", "Lease Property"],
      unique: true,
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

const PropertyOwnershipTypeModel = mongoose.model(
  "PropertyOwnershipType",
  propertyOwnershipTypeSchema
);

module.exports = PropertyOwnershipTypeModel;