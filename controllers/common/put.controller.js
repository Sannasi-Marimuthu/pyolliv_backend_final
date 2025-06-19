

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




//update single policytype - /api/v1/common/policy-type/:id
exports.updatePolicyType = catchAsyncError(async (req,res,next) => {
    let singlePolicyType = await PolicyTypeModel.findById(req.params.id);
    if(!singlePolicyType) {
      return res.status(404).json({
          success : false,
          message : "Policy Type not found"
      });
    }
   singlePolicyType = await PolicyTypeModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        singlePolicyType
    })
})



//update single propertytype  - /api/v1/common/property-type/:id
exports.updatePropertyType = catchAsyncError(async (req,res,next) => {
    let singlePropertyType = await PropertyTypeModel.findById(req.params.id);
    if(!singlePropertyType) {
      return res.status(404).json({
          success : false,
          message : "Property Type not found"
      });
    }
   singlePropertyType = await PropertyTypeModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        singlePropertyType
    })
})


//update single rom view - /api/v1/common/room-view/:id
exports.updateRoomView = catchAsyncError(async (req,res,next) => {
    let singleRoomView = await RoomViewModel.findById(req.params.id);
    if(!singleRoomView) {
      return res.status(404).json({
          success : false,
          message : "Room View not found"
      });
    }
   singleRoomView = await RoomViewModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        singleRoomView
    })
})



//update single bed view - /api/v1/common/bed-view/:id
exports.updateBedView = catchAsyncError(async (req,res,next) => {
    let singleBedView = await BedTypeModel.findById(req.params.id);
    if(!singleBedView) {
      return res.status(404).json({
          success : false,
          message : "Bed View not found"
      });
    }
   singleBedView = await BedTypeModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        singleBedView
    })
})


//update single amenities category - /api/v1/common/amenities-category/:id
exports.updateAmenitiesCategory = catchAsyncError(async (req,res,next) => {
    let singleAmenitiesCategory = await AmenitiesCategoryModel.findById(req.params.id);
    if(!singleAmenitiesCategory) {
      return res.status(404).json({
          success : false,
          message : "Amenities Category not found"
      });
    }
   singleAmenitiesCategory = await AmenitiesCategoryModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        singleAmenitiesCategory
    })
})



//update single idProof - /api/v1/common/idProof/:id
exports.updateIdProof = catchAsyncError(async (req,res,next) => {
    let singleIdProof = await IdProofModel.findById(req.params.id);
    if(!singleIdProof) {
      return res.status(404).json({
          success : false,
          message : "Property Type not found"
      });
    }
   singleIdProof = await IdProofModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        singleIdProof
    })
})


//update single utility type - /api/v1/common/utility-type/:id
exports.updateUtilityType = catchAsyncError(async (req,res,next) => {
    let singleUtilityType = await UtilityTypeModel.findById(req.params.id);
    if(!singleUtilityType) {
      return res.status(404).json({
          success : false,
          message : "Property Type not found"
      });
    }
   singleUtilityType = await UtilityTypeModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        singleUtilityType
    })
})



//update single mealplan - /api/v1/common/meal-plan/:id
exports.updateMealPlan = catchAsyncError(async (req,res,next) => {
    let singleMealPlan = await MealPlanModel.findById(req.params.id);
    if(!singleMealPlan) {
      return res.status(404).json({
          success : false,
          message : "Property Type not found"
      });
    }
   singleMealPlan = await MealPlanModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        singleMealPlan
    })
})



//update single amenities-type - /api/v1/common/amenities-type/:id
exports.updateAmenitiesType = catchAsyncError(async (req,res,next) => {
  try {
    const { amenitiesName, category } = req.body;

    const updatedType = await AmenitiesTypeModel.findByIdAndUpdate(
      req.params.id,
      { amenitiesName, category },
      { new: true, runValidators: true }
    );

    if (!updatedType) {
      return res.status(404).json({ success: false, message: "Amenities Type not found" });
    }

    res.status(200).json({ success: true, message: "Updated successfully", data: updatedType });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



//update single address-detail - /api/v1/common/address-type/:id
exports.updateAddress = catchAsyncError(async (req,res,next) => {
   try {
    const { id } = req.params;
    const updatedAddress = await AddressModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedAddress) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Address updated successfully",
      data: updatedAddress,
    });
  } catch (error) {
    console.error("Error updating address:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to update address",
      error: error.message,
    });
  }
});



//update single account-detail - /api/v1/common/account-type/:id
exports.updateBankDetail = catchAsyncError(async (req,res,next) => {
   try {
    const { id } = req.params;
    const bankDetails = await BankDetailsModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bankDetails) {
      return res.status(404).json({
        success: false,
        message: "Bank Details not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Bank Details updated successfully",
      data: bankDetails,
    });
  } catch (error) {
    console.error("Error updating Bank Details:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to update Bank Details",
      error: error.message,
    });
  }
});


//update single room-size-unit - /api/v1/common/room-size/:id
exports.updateRoomSizeUnits = catchAsyncError(async (req,res,next) => {
   try {
    const { id } = req.params;
    const units = await RoomSizeUnitModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!units) {
      return res.status(404).json({
        success: false,
        message: "units not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "units updated successfully",
      data: units,
    });
  } catch (error) {
    console.error("Error updating units:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to update units",
      error: error.message,
    });
  }
});


//update single room-type - /api/v1/common/room-type/:id
exports.updateRoomTypes = catchAsyncError(async (req,res,next) => {
   try {
    const { id } = req.params;
    const roomTypes = await RoomTypeModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!roomTypes) {
      return res.status(404).json({
        success: false,
        message: "roomTypes not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "roomTypes updated successfully",
      data: roomTypes,
    });
  } catch (error) {
    console.error("Error updating roomTypes:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to update roomTypes",
      error: error.message,
    });
  }
});


//update single star_category - /api/v1/common/star-category/:id
exports.updateStarCategories = catchAsyncError(async (req,res,next) => {
   try {
    const { id } = req.params;
    const categories = await StarCategoryModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!categories) {
      return res.status(404).json({
        success: false,
        message: "categories not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "categories updated successfully",
      data: categories,
    });
  } catch (error) {
    console.error("Error updating categories:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to update categories",
      error: error.message,
    });
  }
});