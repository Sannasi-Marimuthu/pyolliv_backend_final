const mongoose = require("mongoose");


const idProofSchema = new mongoose.Schema(
  {
    idProof: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const IdProofModel = mongoose.model("IdProof", idProofSchema);

module.exports = IdProofModel;
