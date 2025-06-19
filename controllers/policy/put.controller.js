const catchAsyncError = require("../../middlewares/catchAsyncError");
const CancellationTypeModel = require("../../models/policy/cancellationTypeModel");


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
