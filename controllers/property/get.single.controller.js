const catchAsyncError = require("../../middlewares/catchAsyncError");
const DocsModel = require("../../models/property/docsModel");
const PropertyDetailModel = require("../../models/property/propertyDetailModel");
const PropertyImageModel = require("../../models/property/propertyImageModel");
const PropertyOwnershipTypeModel = require("../../models/property/propertyOwnerShipTypeMode");
const RoomDetailModel = require("../../models/property/roomDetailModel");



// GET single Docs - /api/v1/property/docs/:id
exports.getSingleDocs = catchAsyncError(async (req, res, next) => {
  const docs = await DocsModel.findById(req.params.id);
  if (!docs) {
    return next(new ErrorHandler("Document not found", 404));
  }
  res.status(200).json({
    success: true,
    docs,
  });
});

// GET single property image - /api/v1/property/property-img/:id
exports.getSinglePropertyImage = catchAsyncError(async (req, res, next) => {
  const propertyImage = await PropertyImageModel.findById(req.params.id);
  if (!propertyImage) {
    return next(new ErrorHandler("Property Image not found", 404));
  }
  res.status(200).json({
    success: true,
    propertyImage,
  });
});


// GET single property ownership type - /api/v1/property/property-ownership-type/:id
exports.getSinglePropertyOwnershipType = catchAsyncError(async (req, res, next) => {
  const propertyOwnershipType = await PropertyOwnershipTypeModel.findById(req.params.id);
  if (!propertyOwnershipType) {
    return next(new ErrorHandler("Property Ownership Type not found", 404));
  }
  res.status(200).json({
    success: true,
    propertyOwnershipType,
  });
});


// GET single property detail - /api/v1/property/property-detail/:id
exports.getSinglePropertyDetail = catchAsyncError(async (req, res, next) => {
  const propertyDetail = await PropertyDetailModel.findById(req.params.id);
  if (!propertyDetail) {
    return next(new ErrorHandler("Property Detail not found", 404));
  }
  res.status(200).json({
    success: true,
    propertyDetail,
  });
});


// GET single room detail - /api/v1/property/room-detail/:id
exports.getSingleRoomDetail = catchAsyncError(async (req, res, next) => {
  const roomDetail = await RoomDetailModel.findById(req.params.id)
    .populate("smoking_policy")
    .populate("room_size")
    .populate("room_view")
    .populate("bed_type")
    .populate("room_type")
    .populate("room_amenities");

  if (!roomDetail) {
    return next(new ErrorHandler("Room Detail not found", 404));
  }

  res.status(200).json({
    success: true,
    roomDetail,
  });
});