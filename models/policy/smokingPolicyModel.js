const mongoose = require("mongoose");

const smokingPolicySchema = new mongoose.Schema(
   {
    policyName: {
      type: String,
      trim: true,
      enum: ["Smoking Allowed", "Non-Smoking", "Smoking in Designated Areas"],
    },
    description: {
      type: String,
      trim: true,
    },
    allowedRoomCount: {
      type: Number,
      default: 0,
      validate: {
        validator: function (val) {
          return this.policyName === "Smoking Allowed" ? val > 0 : val === 0;
        },
        message: "allowedRoomCount must be > 0 only when Smoking Allowed",
      },
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

const SmokingPolicyModel  = mongoose.model("SmokingPolicy", smokingPolicySchema);
module.exports = SmokingPolicyModel;
