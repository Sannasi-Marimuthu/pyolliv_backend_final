const catchAsyncError = require("../../middlewares/catchAsyncError");
const WebFormModel = require("../../models/web/webFormModel");

//Delete web-form - /api/v1/web/web-form/:id
exports.deleteWebForm = catchAsyncError(async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedForm = await WebFormModel.findByIdAndDelete(id);

    if (!deletedForm) {
      return res.status(404).json({
        success: false,
        message: "WebForm not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "WebForm deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting WebForm:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to delete WebForm",
      error: error.message,
    });
  }
});
