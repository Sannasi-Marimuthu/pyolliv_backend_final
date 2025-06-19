const catchAsyncError = require("../../middlewares/catchAsyncError");
const WebFormModel = require("../../models/web/webFormModel");


//get all Amenities type - /api/v1/web/web-form
exports.updateWebForm = catchAsyncError(async (req, res, next) => {
 try {
    const { id } = req.params;

    const updatedWebForm = await WebFormModel.findByIdAndUpdate(
      id,
      { $set: req.body }, // directly update using req.body
      { new: true, runValidators: true }
    );

    if (!updatedWebForm) {
      return res.status(404).json({
        success: false,
        message: "WebForm not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "WebForm updated successfully",
      data: updatedWebForm,
    });
  } catch (error) {
    console.error("Update WebForm error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to update WebForm",
      error: error.message,
    });
  }
});