const catchAsyncError = require("../../middlewares/catchAsyncError");
const CancellationTypeModel = require("../../models/policy/cancellationTypeModel");
const CheckInOutPolicyModel = require("../../models/policy/checkInOutPolicyModel");
const CustomRulesModel = require("../../models/policy/customRuleModel");
const PropertyRuleModel = require("../../models/policy/propertyRuleModel");
const SmokingPolicyModel = require("../../models/policy/smokingPolicyModel");


//get all smoking-policy - /api/v1/policy/smoking-policy
exports.getAllSmokingPolicies  = catchAsyncError(async (req, res, next) => {
     try {
    const smokingPolicies = await SmokingPolicyModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: smokingPolicies.length,
      data: smokingPolicies,
    });
  } catch (error) {
    console.error("Error fetching smoking policies:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch smoking policies",
      error: error.message,
    });
  }
});


//get all property-rule - /api/v1/policy/property-rule
exports.getAllPropertyRule  = catchAsyncError(async (req, res, next) => {
     try {
    const propertyRule = await PropertyRuleModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: propertyRule.length,
      data: propertyRule,
    });
  } catch (error) {
    console.error("Error fetching Property Rules:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch Property Rules",
      error: error.message,
    });
  }
});

//get all custome-policy - /api/v1/policy/custom-policy
exports.getAllCustomPolicy  = catchAsyncError(async (req, res, next) => {
     try {
    const customPolicy = await CustomRulesModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: customPolicy.length,
      data: customPolicy,
    });
  } catch (error) {
    console.error("Error fetching Custom Policy:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch Custom Policy",
      error: error.message,
    });
  }
});


//get all chekinout-policy - /api/v1/policy/checkinout-policy
exports.getAllCheckInOutPolicy  = catchAsyncError(async (req, res, next) => {
     try {
    const checkInOutPolicy = await CheckInOutPolicyModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: checkInOutPolicy.length,
      data: checkInOutPolicy,
    });
  } catch (error) {
    console.error("Error fetching CheckinOut Policy:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch CheckinOut Policy",
      error: error.message,
    });
  }
});


//get all cancellation-policy - /api/v1/policy/cancellation-policy
exports.getAllCancellationPolicy  = catchAsyncError(async (req, res, next) => {
     try {
    const cancellationPolicy = await CancellationTypeModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cancellationPolicy.length,
      data: cancellationPolicy,
    });
  } catch (error) {
    console.error("Error fetching Cancellation Policy:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch Cancellation Policy",
      error: error.message,
    });
  }
});