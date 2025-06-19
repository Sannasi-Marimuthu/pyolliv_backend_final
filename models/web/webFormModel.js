const mongoose = require("mongoose");

const WebFormSchema = new mongoose.Schema(
  {
    property_detail: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PropertyDetail",
        required: true,
      },
    ],
    property_type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PropertyType",
        required: true,
      },
    ],
    star_category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StarCategory",
      },
    ],
    address: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
    meal_plan: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MealPlan",
      },
    ],
    checkInOutPolicy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CheckInOutPolicy",
      },
    ],
    cancellation_policy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CancellationType",
      },
    ],
    property_rule: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PropertyRule",
      },
    ],
    id_proof: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "IdProof",
      },
    ],
    custom_property_rule: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CustomRule",
      },
    ],
    bank: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BankDetail",
      },
    ],
    docs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Docs",
      },
    ],
    utility_type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UtilityType",
      },
    ],
    property_owner_type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PropertyOwnershipType",
      },
    ],
    property_image: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PropertyImage",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const WebFormModel = mongoose.model("WebForm", WebFormSchema);

module.exports = WebFormModel;
