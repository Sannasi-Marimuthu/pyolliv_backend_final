const mongoose = require("mongoose");

const mealPlanSchema = new mongoose.Schema(
  {
    isRestaurantOperational: {
      type: Boolean,
    },
    type: {
      type: String,
      enum: ["Complementary", "Charges Applied"],
    },
    includes: [
      {
        type: String,
        enum: ["Breakfast", "Lunch", "Dinner", "Snacks", "Drinks"],
      },
    ],
    pricingType: {
      type: String,
      enum: ["Property Based", "Additional Charges"],
    },
    additionalChargeAmount: {
      type: Number,
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

// ✅ Correct position of pre-save middleware
mealPlanSchema.pre("save", function (next) {
  if (!this.isRestaurantOperational) {
    this.includes = undefined;
    this.type = undefined;
    this.pricingType = undefined;
    this.additionalChargeAmount = undefined;
  }

  if (this.pricingType === "Property Based") {
    this.additionalChargeAmount = undefined;
  }

  next();
});

const MealPlanModel = mongoose.model("MealPlan", mealPlanSchema);

module.exports = MealPlanModel;
