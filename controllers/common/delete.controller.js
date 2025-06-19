const catchAsyncError = require("../../middlewares/catchAsyncError");
const AddressModel = require("../../models/common/addressModel");
const AmenitiesCategoryModel = require("../../models/common/amenitiesCategoryModel");
const AmenitiesTypeModel = require("../../models/common/amenitiesTypeModel");
const BankDetailsModel = require("../../models/common/bankDetailsModel");
const BedTypeModel = require("../../models/common/bedTypeModel");
const IdProofModel = require("../../models/common/idProofModel");
const MealPlanModel = require("../../models/common/mealPlanModel");
const PropertyTypeModel = require("../../models/common/propertyTypeModel");
const RoomSizeUnitModel = require("../../models/common/roomSizeUnitModel");
const RoomTypeModel = require("../../models/common/roomTypeModel");
const RoomViewModel = require("../../models/common/roomViewModel");
const StarCategoryModel = require("../../models/common/starCategoryModel");
const UtilityTypeModel = require("../../models/common/utilityTypeModel");
const PolicyTypeModel = require("../../models/policy/policyTypeModel");

//Delete single policy type - /api/v1/policy-type/:id
exports.deletePolicyType = catchAsyncError(async (req, res, next) => {
  let policyType = await PolicyTypeModel.findById(req.params.id);
  if (!policyType) {
    return res.status(404).json({
      success: false,
      message: "PolicyType not found",
    });
  }
  await policyType.deleteOne();
  res.status(200).json({
    success: true,
    message: "PolicyType Deleted!",
  });
});

//Delete single property type - /api/v1/property-type/:id
exports.deletePropertytype = catchAsyncError(async (req, res, next) => {
  let propertyType = await PropertyTypeModel.findById(req.params.id);
  if (!propertyType) {
    return res.status(404).json({
      success: false,
      message: "Property type not found",
    });
  }
  await propertyType.deleteOne();
  res.status(200).json({
    success: true,
    message: "Property type Deleted!",
  });
});

//Delete single Bed view - /api/v1/bed-view/:id
exports.deleteBedView = catchAsyncError(async (req, res, next) => {
  let bedView = await BedTypeModel.findById(req.params.id);
  if (!bedView) {
    return res.status(404).json({
      success: false,
      message: "Bed View not found",
    });
  }
  await bedView.deleteOne();
  res.status(200).json({
    success: true,
    message: "Bed View Deleted!",
  });
});

//Delete single Room view - /api/v1/room-view/:id
exports.deleteRoomView = catchAsyncError(async (req, res, next) => {
  let roomView = await RoomViewModel.findById(req.params.id);
  if (!roomView) {
    return res.status(404).json({
      success: false,
      message: "Room View not found",
    });
  }
  await roomView.deleteOne();
  res.status(200).json({
    success: true,
    message: "Room View Deleted!",
  });
});

//Delete single Amenities Category - /api/v1/amenities-category/:id
exports.deleteAmenitiesCategory = catchAsyncError(async (req, res, next) => {
  let amenitiesCategory = await AmenitiesCategoryModel.findById(req.params.id);
  if (!amenitiesCategory) {
    return res.status(404).json({
      success: false,
      message: "Amenities Category not found",
    });
  }
  await amenitiesCategory.deleteOne();
  res.status(200).json({
    success: true,
    message: "Amenities Category Deleted!",
  });
});

//Delete single id Proof - /api/v1/idProof/:id
exports.deleteIdProof = catchAsyncError(async (req, res, next) => {
  let idProof = await IdProofModel.findById(req.params.id);
  if (!idProof) {
    return res.status(404).json({
      success: false,
      message: "Id Proof not found",
    });
  }
  await idProof.deleteOne();
  res.status(200).json({
    success: true,
    message: "Id Proof Deleted!",
  });
});

//Delete single utility type- /api/v1/utility-type/:id
exports.deleteUtilityType = catchAsyncError(async (req, res, next) => {
  let utilityType = await UtilityTypeModel.findById(req.params.id);
  if (!utilityType) {
    return res.status(404).json({
      success: false,
      message: "Utility Type not found",
    });
  }
  await utilityType.deleteOne();
  res.status(200).json({
    success: true,
    message: "Utility Type Deleted!",
  });
});

//Delete single Meal plan- /api/v1/meal-plan/:id
exports.deleteMealPlan = catchAsyncError(async (req, res, next) => {
  let mealPlan = await MealPlanModel.findById(req.params.id);
  if (!mealPlan) {
    return res.status(404).json({
      success: false,
      message: "Meal Plan not found",
    });
  }
  await mealPlan.deleteOne();
  res.status(200).json({
    success: true,
    message: "Meal Plan Deleted!",
  });
});

//Delete single amenities-type- /api/v1/amenities-type/:id
exports.deleteAmenitiesType = catchAsyncError(async (req, res, next) => {
  try {
    const deletedType = await AmenitiesTypeModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedType) {
      return res
        .status(404)
        .json({ success: false, message: "Amenities Type not found" });
    }

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



//Delete single address- /api/v1/address-detail/:id
exports.deleteAddress = catchAsyncError(async (req, res, next) => {
  try {
    const addresses = await AddressModel.findByIdAndDelete(
      req.params.id
    );
    if (!addresses) {
      return res
        .status(404)
        .json({ success: false, message: "addresses not found" });
    }

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//Delete single account detail- /api/v1/account-detail/:id
exports.deletebankDetail = catchAsyncError(async (req, res, next) => {
  try {
    const bankDetails = await BankDetailsModel.findByIdAndDelete(
      req.params.id
    );
    if (!bankDetails) {
      return res
        .status(404)
        .json({ success: false, message: "bankDetails not found" });
    }

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



//Delete single roomsize-unit- /api/v1/room-size/:id
exports.deleteRoomSizeUnits = catchAsyncError(async (req, res, next) => {
  try {
    const units = await RoomSizeUnitModel.findByIdAndDelete(
      req.params.id
    );
    if (!units) {
      return res
        .status(404)
        .json({ success: false, message: "units not found" });
    }

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


//Delete single room-type- /api/v1/room-type/:id
exports.deleteRoomTypes = catchAsyncError(async (req, res, next) => {
  try {
    const roomTypes = await RoomTypeModel.findByIdAndDelete(
      req.params.id
    );
    if (!roomTypes) {
      return res
        .status(404)
        .json({ success: false, message: "roomTypes not found" });
    }

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


//Delete single star-category- /api/v1/star-category/:id
exports.deleteStarCategories = catchAsyncError(async (req, res, next) => {
  try {
    const categories = await StarCategoryModel.findByIdAndDelete(
      req.params.id
    );
    if (!categories) {
      return res
        .status(404)
        .json({ success: false, message: "categories not found" });
    }

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});