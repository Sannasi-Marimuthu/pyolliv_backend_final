const catchAsyncError = require("../../middlewares/catchAsyncError");
const WebFormModel = require("../../models/web/webFormModel");


//get all Amenities type - /api/v1/common/amenities-type  
exports.getAllWebForms  = catchAsyncError(async (req, res, next) => {
  try {
    const webForms = await WebFormModel.find()
      .populate("property_detail")
      .populate("property_type")
      .populate("star_category")
      .populate("address")
      .populate("meal_plan")
      .populate("checkInOutPolicy")
      .populate("cancellation_policy")
      .populate("property_rule")
      .populate("id_proof") // if this is changed to array, keep as-is
      .populate("custom_property_rule")
      .populate("bank")
      .populate("docs")
      .populate("utility_type")
      .populate("property_owner_type")
      .populate("property_image");

    res.status(200).json({
      success: true,
      count: webForms.length,
      data: webForms
    });
  } catch (error) {
    console.error("Error fetching web forms:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch web forms",
      error: error.message
    });
  }
});