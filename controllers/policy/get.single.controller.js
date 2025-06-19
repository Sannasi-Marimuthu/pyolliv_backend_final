const catchAsyncError = require("../../middlewares/catchAsyncError");
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
