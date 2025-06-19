const catchAsyncError = require("../../middlewares/catchAsyncError");
const WebFormModel = require("../../models/web/webFormModel");



//get all Amenities type - /api/v1/common/amenities-type  
exports.getSingleWebForm   = catchAsyncError(async (req, res, next) => {
  try {
    const { id } = req.params;

    const webForm = await WebFormModel.findById(id)
      .populate("property_detail")
      .populate("property_type")
      .populate("star_category")
      .populate("address")
      .populate("meal_plan")
      .populate("checkInOutPolicy")
      .populate("cancellation_policy")
      .populate("property_rule")
      .populate("id_proof") // will work with array or single ID
      .populate("custom_property_rule")
      .populate("bank")
      .populate("docs")
      .populate("utility_type")
      .populate("property_owner_type")
      .populate("property_image");

    if (!webForm) {
      return res.status(404).json({
        success: false,
        message: "WebForm not found",
      });
    }

    res.status(200).json({
      success: true,
      data: webForm,
    });
  } catch (error) {
    console.error("Error fetching single web form:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch web form",
      error: error.message,
    });
  }
});