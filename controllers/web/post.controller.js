const catchAsyncError = require("../../middlewares/catchAsyncError");


const WebFormModel = require("../../models/web/webFormModel");
// docs => /api/v1/property/docs
exports.newWebForm = catchAsyncError(async (req, res, next) => {
   try {
    const {
      property_detail,
      property_type,
      star_category,
      address,
      meal_plan,
      checkInOutPolicy,
      cancellation_policy,
      property_rule,
      id_proof,
      custom_property_rule,
      bank,
      docs,
      utility_type,
      property_owner_type,
      property_image
    } = req.body;

    // Required fields check
    if (!property_detail || !property_type) {
      return res.status(400).json({
        success: false,
        message: "property_detail and property_type are required"
      });
    }

    const newWebForm = await WebFormModel.create({
      property_detail,
      property_type,
      star_category,
      address,
      meal_plan,
      checkInOutPolicy,
      cancellation_policy,
      property_rule,
      id_proof,
      custom_property_rule,
      bank,
      docs,
      utility_type,
      property_owner_type,
      property_image
    });

    res.status(201).json({
      success: true,
      message: "WebForm data created successfully",
      data: newWebForm
    });
  } catch (error) {
    console.error("WebForm creation error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create WebForm data",
      error: error.message
    });
  }
});