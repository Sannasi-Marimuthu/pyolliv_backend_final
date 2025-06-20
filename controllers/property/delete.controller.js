const catchAsyncError = require("../../middlewares/catchAsyncError");
const DocsModel = require("../../models/property/docsModel");
const PropertyDetailModel = require("../../models/property/propertyDetailModel");
const PropertyImageModel = require("../../models/property/propertyImageModel");
const PropertyOwnershipTypeModel = require("../../models/property/propertyOwnerShipTypeMode");
const RoomDetailModel = require("../../models/property/roomDetailModel");


//Delete docs - /api/v1/property/docs/:id
exports.deleteDocs = catchAsyncError(async (req, res, next) => {
  try {
    const docs = await DocsModel.findByIdAndDelete(req.params.id);
    if (!docs) {
      return res.status(404).json({
        success: false,
        message: "Docs record not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Docs record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});



//Delete property-img - /api/v1/property/property-img/:id
exports.deletePropertyImage = catchAsyncError(async (req, res, next) => {
  try {
    const propertyImg = await PropertyImageModel.findByIdAndDelete(req.params.id);
    if (!propertyImg) {
      return res.status(404).json({
        success: false,
        message: "Property Image record not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Property Image record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


//Delete property-ownership - /api/v1/property/property-ownership/:id
exports.deletePropertyOwnershipType = catchAsyncError(async (req, res, next) => {
  try {
    const propertyOwnership = await PropertyOwnershipTypeModel.findByIdAndDelete(req.params.id);
    if (!propertyOwnership) {
      return res.status(404).json({
        success: false,
        message: "Property Ownership record not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Property Ownership record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


//Delete property-detail - /api/v1/property/property-detail/:id
exports.deletePropertyDetail = catchAsyncError(async (req, res, next) => {
  try {
    const propertyDetail = await PropertyDetailModel.findByIdAndDelete(req.params.id);
    if (!propertyDetail) {
      return res.status(404).json({
        success: false,
        message: "Property Detail record not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Property Detail record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


//Delete room-detail - /api/v1/property/room-detail/:id
exports.deleteRoomDetail = catchAsyncError(async (req, res, next) => {
  try {
    const roomDetail = await RoomDetailModel.findByIdAndDelete(req.params.id);
    if (!roomDetail) {
      return res.status(404).json({
        success: false,
        message: "Room Detail record not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Room Detail record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});