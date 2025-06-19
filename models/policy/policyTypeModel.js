const mongoose = require("mongoose");


const policyTypeSchema = new mongoose.Schema(
  {
    policyType: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const PolicyTypeModel = mongoose.model("PolicyType", policyTypeSchema);

module.exports = PolicyTypeModel;
