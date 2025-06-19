const mongoose = require("mongoose");

const docsSchema = new mongoose.Schema(
  {
    gstNumber: {
      type: String,
      trim: true,
    },
    gstCertificateImage: {
      type: String, // e.g., "/uploads/docs/gst_cert_123.jpg"
      required: false,
    },
    cancelledChequeImage: {
      type: String, // e.g., "/uploads/docs/cheque_123.jpg"
      required: false,
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

const DocsModel = mongoose.model("Docs", docsSchema);
module.exports = DocsModel;
