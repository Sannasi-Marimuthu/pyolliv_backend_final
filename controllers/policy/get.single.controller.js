const catchAsyncError = require("../../middlewares/catchAsyncError");
const CancellationTypeModel = require("../../models/policy/cancellationTypeModel");
const CheckInOutPolicyModel = require("../../models/policy/checkInOutPolicyModel");
const CustomRulesModel = require("../../models/policy/customRuleModel");
const PropertyRuleModel = require("../../models/policy/propertyRuleModel");
const SmokingPolicyModel = require("../../models/policy/smokingPolicyModel");

//Get smoking policy  - /api/v1/policy/smoking-policy/:id
exports.getSingleSmokingPolicy = catchAsyncError(async (req, res, next) => {
  const smokingPolicy = await SmokingPolicyModel.findById(req.params.id);
  if (!smokingPolicy) {
    return next(new ErrorHandler("Smoking Policy not found", 404));
  }
  res.status(200).json({
    success: true,
    smokingPolicy,
  });
});



//Get single Property-rule - /api/v1/policy/propert-rule/:id
exports.getSinglePropertyRule = catchAsyncError(async (req, res, next) => {
  const propertyRule = await PropertyRuleModel.findById(req.params.id);
  if (!propertyRule) {
    return next(new ErrorHandler("Property Rule not found", 404));
  }
  res.status(200).json({
    success: true,
    propertyRule,
  });
});

//Get single custom-policy - /api/v1/policy/custom-policy/:id
exports.getSingleCustomPolicy = catchAsyncError(async (req, res, next) => {
  const customPolicy = await CustomRulesModel.findById(req.params.id);
  if (!customPolicy) {
    return next(new ErrorHandler("Custom Policy not found", 404));
  }
  res.status(200).json({
    success: true,
    customPolicy,
  });
});

//Get single custom-policy - /api/v1/policy/custom-policy/:id
exports.getSingleCheckInOutpolicy = catchAsyncError(async (req, res, next) => {
  const checkInOutPolicy = await CheckInOutPolicyModel.findById(req.params.id);
  if (!checkInOutPolicy) {
    return next(new ErrorHandler("CheckInOut Policy not found", 404));
  }
  res.status(200).json({
    success: true,
    checkInOutPolicy,
  });
});

//Get single cancellation-policy - /api/v1/policy/cancellation-policy/:id
exports.getSingleCancellationpolicy = catchAsyncError(async (req, res, next) => {
  const cancellationPolicy = await CancellationTypeModel.findById(req.params.id);
  if (!cancellationPolicy) {
    return next(new ErrorHandler("Cancellation Policy not found", 404));
  }
  res.status(200).json({
    success: true,
    cancellationPolicy,
  });
});

//Get single cancellation-policy - /api/v1/policy/cancellation-policy/:id
exports.getSingleCancellationpolicy = catchAsyncError(async (req, res, next) => {
  const cancellationPolicy = await CancellationTypeModel.findById(req.params.id);
  if (!cancellationPolicy) {
    return next(new ErrorHandler("Cancellation Policy not found", 404));
  }
  res.status(200).json({
    success: true,
    cancellationPolicy,
  });
});