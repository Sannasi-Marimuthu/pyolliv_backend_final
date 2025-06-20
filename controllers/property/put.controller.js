const catchAsyncError = require("../../middlewares/catchAsyncError");
const DocsModel = require("../../models/property/docsModel");
const PropertyDetailModel = require("../../models/property/propertyDetailModel");
const PropertyImageModel = require("../../models/property/propertyImageModel");
const PropertyOwnershipTypeModel = require("../../models/property/propertyOwnerShipTypeMode");
const RoomDetailModel = require("../../models/property/roomDetailModel");


//update single docs - /api/v1/property/docs/:id
exports.updateDocs = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let docs = await DocsModel.findById(id);
  if (!docs) {
    return res.status(404).json({
      success: false,
      message: "Docs record not found",
    });
  }
  docs = await DocsModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "Docs updated successfully",
    data: docs,
  });
});


//update single property-img - /api/v1/property/property-img/:id
exports.updatePropertyImage = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let propertyImg = await PropertyImageModel.findById(id);
  if (!propertyImg) {
    return res.status(404).json({
      success: false,
      message: "Property Image record not found",
    });
  }
  propertyImg = await PropertyImageModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "Property Image updated successfully",
    data: propertyImg,
  });
});


//update single property-ownershiptype - /api/v1/property/property-ownership-type/:id
exports.updatePropertyOwnershipType = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let propertyOwnership = await PropertyOwnershipTypeModel.findById(id);
  if (!propertyOwnership) {
    return res.status(404).json({
      success: false,
      message: "Property Ownership record not found",
    });
  }
  propertyOwnership = await PropertyOwnershipTypeModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "Property Ownership updated successfully",
    data: propertyOwnership,
  });
});



//update single property-detail - /api/v1/property/property-detail/:id
exports.updatePropertyDetail = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let propertyDetail = await PropertyDetailModel.findById(id);
  if (!propertyDetail) {
    return res.status(404).json({
      success: false,
      message: "Property Detail record not found",
    });
  }
  propertyDetail = await PropertyDetailModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "Property Detail updated successfully",
    data: propertyDetail,
  });
});



//update single room-detail - /api/v1/property/room-detail/:id
exports.updateRoomDetail = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let roomDetail = await RoomDetailModel.findById(id);
  if (!roomDetail) {
    return res.status(404).json({
      success: false,
      message: "Room Detail record not found",
    });
  }
  roomDetail = await RoomDetailModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "Room Detail updated successfully",
    data: roomDetail,
  });
});
