const catchAsyncError = require("../../middlewares/catchAsyncError");
const CancellationTypeModel = require("../../models/policy/cancellationTypeModel");
const CheckInOutPolicyModel = require("../../models/policy/checkInOutPolicyModel");
const CustomRulesModel = require("../../models/policy/customRuleModel");
const PropertyRuleModel = require("../../models/policy/propertyRuleModel");
const SmokingPolicyModel = require("../../models/policy/smokingPolicyModel");


//update single policytype - /api/v1/common/policy-type/:id
exports.updateCancellationType = catchAsyncError(async (req,res,next) => {
    let singleCancellationType = await CancellationTypeModel.findById(req.params.id);
    if(!singleCancellationType) {
      return res.status(404).json({
          success : false,
          message : "Policy Type not found"
      });
    }
   singleCancellationType = await CancellationTypeModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        singleCancellationType
    })
})

//update single policytype - /api/v1/common/policy-type/:id
exports.updateCheckInOutPolicy = catchAsyncError(async (req,res,next) => {
    let checkInOutPolicy = await CheckInOutPolicyModel.findById(req.params.id);
    if(!checkInOutPolicy) {
      return res.status(404).json({
          success : false,
          message : "CheckInOut Policy not found"
      });
    }
   checkInOutPolicy = await CheckInOutPolicyModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        checkInOutPolicy
    })
})


//update single custom policy - /api/v1/common/custom-policy/:id
exports.updateCustomPolicy = catchAsyncError(async (req,res,next) => {
    let customPolicy = await CustomRulesModel.findById(req.params.id);
    if(!customPolicy) {
      return res.status(404).json({
          success : false,
          message : "Custom Policy not found"
      });
    }
   customPolicy = await CustomRulesModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        customPolicy
    })
})


//update single property rule - /api/v1/common/property-rule/:id
exports.updatePropertyRule = catchAsyncError(async (req,res,next) => {
    let propertyRule = await PropertyRuleModel.findById(req.params.id);
    if(!propertyRule) {
      return res.status(404).json({
          success : false,
          message : "Property rule not found"
      });
    }
   propertyRule = await PropertyRuleModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        propertyRule
    })
})

//update single smoking policy - /api/v1/common/smoking-policy/:id
exports.updateSmokingPolicy = catchAsyncError(async (req,res,next) => {
    let smokingpolicy = await SmokingPolicyModel.findById(req.params.id);
    if(!smokingpolicy) {
      return res.status(404).json({
          success : false,
          message : "Property rule not found"
      });
    }
   smokingpolicy = await SmokingPolicyModel.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        smokingpolicy
    })
})
