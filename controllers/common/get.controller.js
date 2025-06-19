const catchAsyncError = require('../../middlewares/catchAsyncError');
const APIFeatures = require('../../utils/apiFeatures');
const PolicyTypeModel = require('../../models/policy/policyTypeModel');
const PropertyTypeModel = require('../../models/common/propertyTypeModel');
const BedTypeModel = require('../../models/common/bedTypeModel');
const RoomViewModel = require('../../models/common/roomViewModel');
const AmenitiesCategoryModel = require('../../models/common/amenitiesCategoryModel');
const IdProofModel = require('../../models/common/idProofModel');
const UtilityTypeModel = require('../../models/common/utilityTypeModel');
const MealPlanModel = require('../../models/common/mealPlanModel');
const AmenitiesTypeModel = require('../../models/common/amenitiesTypeModel');
const AddressModel = require('../../models/common/addressModel');
const BankDetailsModel = require('../../models/common/bankDetailsModel');
const RoomSizeUnitModel = require('../../models/common/roomSizeUnitModel');
const RoomTypeModel = require('../../models/common/roomTypeModel');
const StarCategoryModel = require('../../models/common/starCategoryModel');



//get all policy type - /api/v1/common/policy-type
exports.getPolicyType = catchAsyncError(async (req, res, next) => {
  const resPerPage = 10;
  const apiFeatures = new APIFeatures(PolicyTypeModel.find(),req.query).search().filter().paginate(resPerPage)
  const policyType = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: policyType.length,
    policyType,
  });
});


//get all property type - /api/v1/common/property-type
exports.getPropertyType = catchAsyncError(async (req, res, next) => {
  const resPerPage = 10;
  const apiFeatures = new APIFeatures(PropertyTypeModel.find(),req.query).search().filter().paginate(resPerPage)
  const propertyType = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: propertyType.length,
    propertyType,
  });
});


//get all bed view - /api/v1/common/bed-view
exports.getBedView = catchAsyncError(async (req, res, next) => {
  const resPerPage = 10;
  const apiFeatures = new APIFeatures(BedTypeModel.find(),req.query).search().filter().paginate(resPerPage)
  const bedView = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: bedView.length,
    bedView,
  });
});


//get all room view - /api/v1/common/room-view
exports.getRoomView = catchAsyncError(async (req, res, next) => {
  const resPerPage = 10;
  const apiFeatures = new APIFeatures(RoomViewModel.find(),req.query).search().filter().paginate(resPerPage)
  const roomView = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: roomView.length,
    roomView,
  });
});


//get all Amenities Category - /api/v1/common/amenities-category
exports.getAmenitiesCategory = catchAsyncError(async (req, res, next) => {
  const resPerPage = 10;
  const apiFeatures = new APIFeatures(AmenitiesCategoryModel.find(),req.query).search().filter().paginate(resPerPage)
  const amenitiesCategory = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: amenitiesCategory.length,
    amenitiesCategory,
  });
});


//get all id proof - /api/v1/common/idProof
exports.getIdProof = catchAsyncError(async (req, res, next) => {
  const resPerPage = 10;
  const apiFeatures = new APIFeatures(IdProofModel.find(),req.query).search().filter().paginate(resPerPage)
  const idProof = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: idProof.length,
    idProof,
  });
});


//get all utility type - /api/v1/common/utility-type
exports.getUtilityType = catchAsyncError(async (req, res, next) => {
  const resPerPage = 10;
  const apiFeatures = new APIFeatures(UtilityTypeModel.find(),req.query).search().filter().paginate(resPerPage)
  const utilityType = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: utilityType.length,
    utilityType,
  });
});


//get all meal plan - /api/v1/common/meal-plan
exports.getMealPlan = catchAsyncError(async (req, res, next) => {
  const resPerPage = 10;
  const apiFeatures = new APIFeatures(MealPlanModel.find(),req.query).search().filter().paginate(resPerPage)
  const mealPlan = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: mealPlan.length,
    mealPlan,
  });
});


//get all Amenities type - /api/v1/common/amenities-type 
exports.getAllAmenitiesTypes = catchAsyncError(async (req, res, next) => {
  try {
    const types = await AmenitiesTypeModel.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({ success: true, data: types });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


//get all address - /api/v1/common/address-detail
exports.getAllAddresses  = catchAsyncError(async (req, res, next) => {
   try {
    const addresses = await AddressModel.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json({
      success: true,
      count: addresses.length,
      data: addresses,
    });
  } catch (error) {
    console.error("Error fetching addresses:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch addresses",
      error: error.message,
    });
  }
});


//get all bank detail - /api/v1/common/accout-detail
exports.getAllBankDetail  = catchAsyncError(async (req, res, next) => {
    try {
    const bankDetails = await BankDetailsModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: bankDetails.length,
      data: bankDetails,
    });
  } catch (error) {
    console.error("Error fetching bank details:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch bank details",
      error: error.message,
    });
  }
});



//get all room size unit - /api/v1/common/room-size
exports.getAllRoomSizeUnits   = catchAsyncError(async (req, res, next) => {
     try {
    const units = await RoomSizeUnitModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: units.length,
      data: units,
    });
  } catch (error) {
    console.error("Error fetching room size units:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch room size units",
      error: error.message,
    });
  }
});

//get all room types - /api/v1/common/room-type
exports.getAllRoomTypes = catchAsyncError(async (req, res, next) => {
   try {
    const roomTypes = await RoomTypeModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: roomTypes.length,
      data: roomTypes,
    });
  } catch (error) {
    console.error("Error fetching room types:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch room types",
      error: error.message,
    });
  }
});


//get all star category - /api/v1/common/star-category
exports.getAllStarCategories = catchAsyncError(async (req, res, next) => {
    try {
    const categories = await StarCategoryModel.find().sort({ starRating: 1 }); // ascending order
    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    console.error("Error fetching star categories:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch star categories",
      error: error.message,
    });
  }
});