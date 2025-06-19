const catchAsyncError = require("../../middlewares/catchAsyncError");
const CancellationTypeModel = require("../../models/policy/cancellationTypeModel");
const CheckInOutPolicyModel = require("../../models/policy/checkInOutPolicyModel");
const CustomRulesModel = require("../../models/policy/customRuleModel");
const PropertyRuleModel = require("../../models/policy/propertyRuleModel");
const SmokingPolicyModel = require("../../models/policy/smokingPolicyModel");



//Delete single smoking policy- /api/v1/policy/smoking-policy/:id
exports.deleteSmokingPolicy = catchAsyncError(async (req, res, next) => {
 try {
    const smokingPolicy = await SmokingPolicyModel.findByIdAndDelete(req.params.id);

    if (!smokingPolicy) {
      return res
        .status(404)
        .json({ success: false, message: "Smoking policy not found" });
    }

    res.status(200).json({
      success: true,
      message: "Smoking policy deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


//Delete single property rule- /api/v1/policy/property-rule/:id
exports.deletePropertyRule = catchAsyncError(async (req, res, next) => {
 try {
    const propertyRule = await PropertyRuleModel.findByIdAndDelete(req.params.id);

    if (!propertyRule) {
      return res
        .status(404)
        .json({ success: false, message: "Property Rule not found" });
    }

    res.status(200).json({
      success: true,
      message: "Property Rule deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


//Delete single custom policy- /api/v1/policy/custom-policy/:id
exports.deleteCustomPolicy = catchAsyncError(async (req, res, next) => {
 try {
    const customPolicy = await CustomRulesModel.findByIdAndDelete(req.params.id);

    if (!customPolicy) {
      return res
        .status(404)
        .json({ success: false, message: "Custom Policy not found" });
    }

    res.status(200).json({
      success: true,
      message: "Custom Policy deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//Delete single checkinout policy- /api/v1/policy/checkinout-policy/:id
exports.deleteCheckInOutPolicy = catchAsyncError(async (req, res, next) => {
 try {
    const checkInOutPolicy = await CheckInOutPolicyModel.findByIdAndDelete(req.params.id);

    if (!checkInOutPolicy) {
      return res
        .status(404)
        .json({ success: false, message: "checkInOut Policy not found" });
    }

    res.status(200).json({
      success: true,
      message: "checkInOut Policy deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


//Delete single cancellation policy- /api/v1/policy/cancellation-policy/:id
exports.deleteCancellationPolicy = catchAsyncError(async (req, res, next) => {
 try {
    const cancellationPolicy = await CancellationTypeModel.findByIdAndDelete(req.params.id);

    if (!cancellationPolicy) {
      return res
        .status(404)
        .json({ success: false, message: "cancellation Policy not found" });
    }

    res.status(200).json({
      success: true,
      message: "cancellation Policy deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});