const catchAsyncError = require("../../middlewares/catchAsyncError");
const PropertyTypeModel = require("../../models/common/propertyTypeModel");
const BedTypeModel = require("../../models/common/bedTypeModel");
const RoomViewModel = require("../../models/common/roomViewModel");
const IdProofModel = require("../../models/common/idProofModel");
const UtilityTypeModel = require("../../models/common/utilityTypeModel");
const MealPlanModel = require("../../models/common/mealPlanModel");
const AmenitiesTypeModel = require("../../models/common/amenitiesTypeModel");
const AmenitiesCategoryModel = require("../../models/common/amenitiesCategoryModel");
const RoomTypeModel = require("../../models/common/roomTypeModel");
const RoomSizeUnitModel = require("../../models/common/roomSizeUnitModel");
const BankDetailsModel = require("../../models/common/bankDetailsModel");
const AddressModel = require("../../models/common/addressModel");
const StarCategoryModel = require("../../models/common/starCategoryModel");
const PolicyTypeModel = require("../../models/policy/policyTypeModel");

// Property - type => /api/v1/common/policy-type
exports.newPropertyType = catchAsyncError(async (req, res, next) => {
  try {
    const { propertyType } = req.body;
    if (!propertyType) {
      return res.status(400).json({
        success: false,
        message: "propertyType field is required",
      });
    }
    const newType = await PropertyTypeModel.create({ propertyType });
    res.status(201).json({
      success: true,
      message: "Property type created successfully",
      data: newType,
    });
  } catch (error) {
    console.error("Error creating property type:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create property type",
      error: error.message,
    });
  }
});

// bed type => /api/v1/common/bed-type
exports.newBedType = catchAsyncError(async (req, res, next) => {
  try {
    const { bedType } = req.body;
    if (!bedType) {
      return res.status(400).json({
        success: false,
        message: "bedType field is required",
      });
    }
    const newBedType = await BedTypeModel.create({ bedType });
    res.status(201).json({
      success: true,
      message: "Bed Type created successfully",
      data: newBedType,
    });
  } catch (error) {
    console.error("Error creating bed Type:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create bed Type",
      error: error.message,
    });
  }
});

// room type => /api/v1/common/room-type
exports.newRoomType = catchAsyncError(async (req, res, next) => {
  try {
    const { roomType } = req.body;
    if (!roomType) {
      return res.status(400).json({
        success: false,
        message: "roomType field is required",
      });
    }
    const newRoomType = await RoomTypeModel.create({ roomType });
    res.status(201).json({
      success: true,
      message: "Room Type created successfully",
      data: newRoomType,
    });
  } catch (error) {
    console.error("Error creating Room Type:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Room Type",
      error: error.message,
    });
  }
});

// room view => /api/v1/common/room-view
exports.newRoomView = catchAsyncError(async (req, res, next) => {
  try {
    const { roomView } = req.body;
    if (!roomView) {
      return res.status(400).json({
        success: false,
        message: "roomView field is required",
      });
    }
    const newRoomView = await RoomViewModel.create({ roomView });
    res.status(201).json({
      success: true,
      message: "Room View created successfully",
      data: newRoomView,
    });
  } catch (error) {
    console.error("Error creating room view:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create room view",
      error: error.message,
    });
  }
});

//amenities category => /api/v1/common/amenities-category
exports.newAmenitiesCategory = catchAsyncError(async (req, res, next) => {
  try {
    const { amenitiesCategory } = req.body;
    if (!amenitiesCategory) {
      return res.status(400).json({
        success: false,
        message: "amenitiesCategory field is required",
      });
    }
    const newAmenitiesCategory = await AmenitiesCategoryModel.create({ amenitiesCategory });
    res.status(201).json({
      success: true,
      message: "Amenities Category created successfully",
      data: newAmenitiesCategory,
    });
  } catch (error) {
    console.error("Error creating Amenities Category:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Amenities Category",
      error: error.message,
    });
  }
});

// policy type=> /api/v1/common/policy-type
exports.newPolicyType = catchAsyncError(async (req, res, next) => {
  try {
    const policyType = await PolicyTypeModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Policy type created successfully",
      data: policyType, // <-- fixed variable name,
    });
  } catch (error) {
    console.error("Error creating policy type:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create policy type",
      error: error.message,
    });
  }
});

// id proof=> /api/v1/common/idProof
exports.newIdProof = catchAsyncError(async (req, res, next) => {
  try {
    const { idProof } = req.body;
    if (!idProof) {
      return res.status(400).json({
        success: false,
        message: "idProof field is required",
      });
    }
    const newIdProod = await IdProofModel.create({ idProof });
    res.status(201).json({
      success: true,
      message: "Id Prood created successfully",
      data: newIdProod,
    });
  } catch (error) {
    console.error("Error creating Id Prood:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Id Prood",
      error: error.message,
    });
  }
});

//utility type=> /api/v1/common/utility-type
exports.newUtilityType = catchAsyncError(async (req, res, next) => {
  try {
    const { utilityType } = req.body;
    if (!utilityType) {
      return res.status(400).json({
        success: false,
        message: "utilityType field is required",
      });
    }
    const newUtilityType = await UtilityTypeModel.create({ utilityType });
    res.status(201).json({
      success: true,
      message: "Utility Type created successfully",
      data: newUtilityType,
    });
  } catch (error) {
    console.error("Error creating Utility Type:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Utility Type",
      error: error.message,
    });
  }
});

//Meal Plan=> /api/v1/common/meal-plan
exports.newMealPlan = catchAsyncError(async (req, res, next) => {
  try {
    const {
      isRestaurantOperational,
      type,
      includes,
      pricingType,
      additionalChargeAmount,
    } = req.body;

    // Basic validation
    if (!type || !includes) {
      return res.status(400).json({
        success: false,
        message: "type and includes fields are required",
      });
    }

    const newMealPlan = await MealPlanModel.create({
      isRestaurantOperational,
      type,
      includes,
      pricingType,
      additionalChargeAmount,
    });

    res.status(201).json({
      success: true,
      message: "Meal Plan created successfully",
      data: newMealPlan,
    });
  } catch (error) {
    console.error("Error creating Meal Plan:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Meal Plan",
      error: error.message,
    });
  }
});

//amenities type => api/v1/common/amenities-type
exports.newAmenitiesType = catchAsyncError(async (req, res, next) => {
  try {
    const { amenitiesName, category } = req.body;

    // Basic validation
    if (!amenitiesName || !category) {
      return res.status(400).json({
        success: false,
        message: "amenitiesName and category are required",
      });
    }

    // Create the new Amenities Type
    const newAmenitiesType = await AmenitiesTypeModel.create({
      amenitiesName,
      category,
    });

    res.status(201).json({
      success: true,
      message: "Amenities Type created successfully",
      data: newAmenitiesType,
    });
  } catch (error) {
    console.error("Error creating Amenities Type:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Amenities Type",
      error: error.message,
    });
  }
});



//Room size unit=> /api/v1/common/room-size
exports.newRoomSizeUnit = catchAsyncError(async (req, res, next) => {
  try {
    const { unitName, label } = req.body;

    // Basic validation
    if (!unitName || !label) {
      return res.status(400).json({
        success: false,
        message: "unitName and label are required",
      });
    }

    // Enum check manually (to catch invalid enum values)
    const validUnits = ["sqft", "sqm"];
    if (!validUnits.includes(unitName)) {
      return res.status(400).json({
        success: false,
        message: "Invalid unitName. Only 'sqft' or 'sqm' allowed.",
      });
    }

    const unit = await RoomSizeUnitModel.create({ unitName, label });

    res.status(201).json({
      success: true,
      message: "Room size unit created successfully",
      data: unit,
    });
  } catch (error) {
    console.error("Error creating RoomSizeUnit:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create RoomSizeUnit",
      error: error.message,
    });
  }
});


//Bank Details=> /api/v1/common/account-detail
exports.newBankDetail = catchAsyncError(async (req, res, next) => {
  try {
    const {
      accountHolderName,
      bankName,
      accountNumber,
      ifscCode,
      branchName
    } = req.body;

    // Basic validation
    if (!accountHolderName || !bankName || !accountNumber || !ifscCode) {
      return res.status(400).json({
        success: false,
        message: "accountHolderName, bankName, accountNumber, and ifscCode are required"
      });
    }

    // Insert into DB
    const bank = await BankDetailsModel.create({
      accountHolderName,
      bankName,
      accountNumber,
      ifscCode,
      branchName
    });

    res.status(201).json({
      success: true,
      message: "Bank detail created successfully",
      data: bank
    });
  } catch (error) {
    console.error("Error creating bank detail:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create bank detail",
      error: error.message
    });
  }
});


//address details => /api/v1/common/address-detail
exports.newAddress  = catchAsyncError(async (req, res, next) => {
   try {
    const {
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      pincode,
      latitude,
      longitude,
      isDefault
    } = req.body;

    // Optional: Basic validation (city, state, pincode as required)
    if (!city || !state || !pincode) {
      return res.status(400).json({
        success: false,
        message: "City, state, and pincode are required fields."
      });
    }

    const newAddress = await AddressModel.create({
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      pincode,
      latitude,
      longitude,
      isDefault
    });

    res.status(201).json({
      success: true,
      message: "Address created successfully",
      data: newAddress
    });
  } catch (error) {
    console.error("Error creating address:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create address",
      error: error.message
    });
  }
});

//address details => /api/v1/common/address-detail
exports.newStarCategory   = catchAsyncError(async (req, res, next) => {
   try {
    const { starRating } = req.body;

    // Validate starRating
    if (!starRating || starRating < 1 || starRating > 5) {
      return res.status(400).json({
        success: false,
        message: "starRating is required and must be between 1 and 5",
      });
    }

    const newStar = await StarCategoryModel.create({ starRating });

    res.status(201).json({
      success: true,
      message: "Star category created successfully",
      data: newStar,
    });
  } catch (error) {
    console.error("Error creating star category:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create star category",
      error: error.message,
    });
  }
});