const mongoose = require("mongoose");

// Schema for individual image entry
const imageSchema = new mongoose.Schema({
  filePath: {
    type: String, // e.g. "/uploads/propertyImages/lobby1.jpg"
    required: true,
  },
});

// Main schema holding all property-related images
const propertyImageSchema = new mongoose.Schema(
  {
    facadeImages: [imageSchema],
    parkingImages: [imageSchema],
    lobbyImages: [imageSchema],
    receptionImages: [imageSchema],
    corridorsImages: [imageSchema],
    liftImages: [imageSchema],
    bathroomImages: [imageSchema],
    otherAreaImages: [imageSchema],
    propertyImages: [imageSchema],
  },
  {
    timestamps: true,
  }
);

const PropertyImageModel = mongoose.model("PropertyImage", propertyImageSchema);
module.exports = PropertyImageModel;