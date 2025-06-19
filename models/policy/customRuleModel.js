const mongoose = require("mongoose");

const customRulesSchema = new mongoose.Schema(
  {
    ruleTitle: {
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

const CustomRulesModel = mongoose.model("CustomRule", customRulesSchema);
module.exports = CustomRulesModel;