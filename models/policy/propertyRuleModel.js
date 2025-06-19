const mongoose = require("mongoose");

const propertyRulesSchema = new mongoose.Schema(
  {
    ruleKey: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },
    question: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      enum: ["Yes/No", "Dropdown", "Multi-Select", "Text", "IdProofs"],
      default: "Yes/No",
    },
    options: {
      type: [String], // Used when type is Dropdown/Multi-Select
    },
    // idProofOptions: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "IdProof", // Used when type is "IdProofs"
    //   },
    // ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const PropertyRuleModel = mongoose.model("PropertyRule", propertyRulesSchema);
module.exports = PropertyRuleModel;