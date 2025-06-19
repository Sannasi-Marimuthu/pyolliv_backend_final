

const catchAsyncError = require('../../middlewares/catchAsyncError');
const AddressModel = require('../../models/common/addressModel');
const AmenitiesCategoryModel = require('../../models/common/amenitiesCategoryModel');
const AmenitiesTypeModel = require('../../models/common/amenitiesTypeModel');
const BankDetailsModel = require('../../models/common/bankDetailsModel');
const BedTypeModel = require('../../models/common/bedTypeModel');
const IdProofModel = require('../../models/common/idProofModel');
const MealPlanModel = require('../../models/common/mealPlanModel');
const PropertyTypeModel = require('../../models/common/propertyTypeModel');
const RoomSizeUnitModel = require('../../models/common/roomSizeUnitModel');
const RoomTypeModel = require('../../models/common/roomTypeModel');
const RoomViewModel = require('../../models/common/roomViewModel');
const StarCategoryModel = require('../../models/common/starCategoryModel');
const UtilityTypeModel = require('../../models/common/utilityTypeModel');
const PolicyTypeModel = require('../../models/policy/policyTypeModel');




//Get Single policy  - /api/v1/common/policy-type/:id
exports.getSinglePolicyType = catchAsyncError(async (req, res, next) => {
  const singlePolicyType = await PolicyTypeModel.findById(req.params.id);
  if(!singlePolicyType) {
    return next(new ErrorHandler('Policy Type not found', 400))
  }
  res.status(201).json({
    success: true,
    singlePolicyType,
  });
});


//Get Single property  - /api/v1/common/property-type/:id
exports.getSinglePropertyType = catchAsyncError(async (req, res, next) => {
  const singlePropertyType = await PropertyTypeModel.findById(req.params.id);
  if(!singlePropertyType) {
    return next(new ErrorHandler('Property Type not found', 400))
  }
  res.status(201).json({
    success: true,
    singlePropertyType,
  });
});


//Get Single bedview  - /api/v1/common/bed-view/:id
exports.getSingleBedView = catchAsyncError(async (req, res, next) => {
  const singleBedView = await BedTypeModel.findById(req.params.id);
  if(!singleBedView) {
    return next(new ErrorHandler('Bed view not found', 400))
  }
  res.status(201).json({
    success: true,
    singleBedView,
  });
});


//Get Single room view  - /api/v1/common/room-view/:id
exports.getSingleRoomView = catchAsyncError(async (req, res, next) => {
  const singleRoomView = await RoomViewModel.findById(req.params.id);
  if(!singleRoomView) {
    return next(new ErrorHandler('Room view not found', 400))
  }
  res.status(201).json({
    success: true,
    singleRoomView,
  });
});


//Get Single amenities category  - /api/v1/common/amenities-category/:id
exports.getSingleAmenitiesCategory = catchAsyncError(async (req, res, next) => {
  const singleAmenitiesCategory = await AmenitiesCategoryModel.findById(req.params.id);
  if(!singleAmenitiesCategory) {
    return next(new ErrorHandler('Room view not found', 400))
  }
  res.status(201).json({
    success: true,
    singleAmenitiesCategory,
  });
});


//Get Single idProof  - /api/v1/common/idProof/:id
exports.getSingleIdProof = catchAsyncError(async (req, res, next) => {
  const singleIdProof = await IdProofModel.findById(req.params.id);
  if(!singleIdProof) {
    return next(new ErrorHandler('Room view not found', 400))
  }
  res.status(201).json({
    success: true,
    singleIdProof,
  });
});


//Get Single utility type - /api/v1/common/utility-type/:id
exports.getSingleUtilityType = catchAsyncError(async (req, res, next) => {
  const singleUtilityType = await UtilityTypeModel.findById(req.params.id);
  if(!singleUtilityType) {
    return next(new ErrorHandler('Room view not found', 400))
  }
  res.status(201).json({
    success: true,
    singleUtilityType,
  });
});


//Get Single meal-plan - /api/v1/common/meal-plan/:id
exports.getSingleMalPlan = catchAsyncError(async (req, res, next) => {
  const singleMealPlan = await MealPlanModel.findById(req.params.id);
  if(!singleMealPlan) {
    return next(new ErrorHandler('Room view not found', 400))
  }
  res.status(201).json({
    success: true,
    singleMealPlan,
  });
});


//Get Single amenities-type - /api/v1/common/amenities-type/:id
exports.getSingleAmenitiesType = catchAsyncError(async (req, res, next) => {
try {
    const type = await AmenitiesTypeModel.findById(req.params.id);
    if (!type) {
      return res.status(404).json({ success: false, message: "Amenities Type not found" });
    }
    res.status(200).json({ success: true, data: type });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


//Get Single address-detail - /api/v1/common/address-detail/:id
exports.getSingleAddress = catchAsyncError(async (req, res, next) => {
 try {
    const { id } = req.params;
    const address = await AddressModel.findById(id);
    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }
    res.status(200).json({
      success: true,
      data: address,
    });
  } catch (error) {
    console.error("Error fetching address:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch address",
      error: error.message,
    });
  }
});

//Get Single account-detail - /api/v1/common/account-detail/:id
exports.getSingleBankDetail = catchAsyncError(async (req, res, next) => {
 try {
    const { id } = req.params;
    const bankDetails = await BankDetailsModel.findById(id);
    if (!bankDetails) {
      return res.status(404).json({
        success: false,
        message: "Bank Details not found",
      });
    }
    res.status(200).json({
      success: true,
      data: bankDetails,
    });
  } catch (error) {
    console.error("Error fetching Bank Details:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch Bank Details",
      error: error.message,
    });
  }
});



//Get Single roomSizeunit - /api/v1/common/room-size/:id
exports.getSingleRoomSizeUnits = catchAsyncError(async (req, res, next) => {
 try {
    const { id } = req.params;
    const units = await RoomSizeUnitModel.findById(id);
    if (!units) {
      return res.status(404).json({
        success: false,
        message: "units not found",
      });
    }
    res.status(200).json({
      success: true,
      data: units,
    });
  } catch (error) {
    console.error("Error fetching units:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch units",
      error: error.message,
    });
  }
});


//Get Single room type - /api/v1/common/room-type/:id
exports.getSingleRoomType= catchAsyncError(async (req, res, next) => {
 try {
    const { id } = req.params;
    const roomTypes = await RoomTypeModel.findById(id);
    if (!roomTypes) {
      return res.status(404).json({
        success: false,
        message: "roomTypes not found",
      });
    }
    res.status(200).json({
      success: true,
      data: roomTypes,
    });
  } catch (error) {
    console.error("Error fetching roomTypes:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch roomTypes",
      error: error.message,
    });
  }
});


//Get Single star category - /api/v1/common/star-category/:id
exports.getSingleStarCategories = catchAsyncError(async (req, res, next) => {
 try {
    const { id } = req.params;
    const categories = await StarCategoryModel.findById(id);
    if (!categories) {
      return res.status(404).json({
        success: false,
        message: "categories not found",
      });
    }
    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
      error: error.message,
    });
  }
});