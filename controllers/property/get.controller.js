const catchAsyncError = require("../../middlewares/catchAsyncError");
const DocsModel = require("../../models/property/docsModel");
const PropertyDetailModel = require("../../models/property/propertyDetailModel");
const PropertyImageModel = require("../../models/property/propertyImageModel");
const PropertyOwnershipTypeModel = require("../../models/property/propertyOwnerShipTypeMode");
const RoomDetailModel = require("../../models/property/roomDetailModel");



//get all docs - /api/v1/property/docs
exports.getAllDocs = catchAsyncError(async (req, res, next) => {
     try {
    const docs = await DocsModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: docs.length,
      data: docs,
    });
  } catch (error) {
    console.error("Error fetching docs:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch documents",
      error: error.message,
    });
  }
});


//get all property image - /api/v1/property/property-image
exports.getAllPropertyImage = catchAsyncError(async (req, res, next) => {
     try {
    const propertyImage = await PropertyImageModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: propertyImage.length,
      data: propertyImage,
    });
  } catch (error) {
    console.error("Error fetching property Image:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch documents",
      error: error.message,
    });
  }
});

//get all property ownershipt - /api/v1/property/property-ownership-type
exports.getAllPropertyOwnershipType = catchAsyncError(async (req, res, next) => {
     try {
    const propertyOwnership = await PropertyOwnershipTypeModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: propertyOwnership.length,
      data: propertyOwnership,
    });
  } catch (error) {
    console.error("Error fetching propertyOwnership:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch documents",
      error: error.message,
    });
  }
});


//get all property detail - /api/v1/property/property-detail
exports.getAllPropertyDetail = catchAsyncError(async (req, res, next) => {
     try {
    const propertyDetail = await PropertyDetailModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: propertyDetail.length,
      data: propertyDetail,
    });
  } catch (error) {
    console.error("Error fetching property Detail:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch documents",
      error: error.message,
    });
  }
});


//get all room detail - /api/v1/property/room-detail
exports.getAllRoomDetail = catchAsyncError(async (req, res, next) => {
     try {
    const roomDetail = await RoomDetailModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: roomDetail.length,
      data: roomDetail,
    });
  } catch (error) {
    console.error("Error fetching room Detail:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch documents",
      error: error.message,
    });
  }
});