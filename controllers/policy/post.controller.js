const catchAsyncError = require("../../middlewares/catchAsyncError");
const CancellationTypeModel = require("../../models/policy/cancellationTypeModel");
const CheckInOutPolicyModel = require("../../models/policy/checkInOutPolicyModel");
const CustomRulesModel = require("../../models/policy/customRuleModel");
const PropertyRuleModel = require("../../models/policy/propertyRuleModel");
const SmokingPolicyModel = require("../../models/policy/smokingPolicyModel");

// cancellation-policy => /api/v1/policy/cancellation-policy
exports.newCancellationType = catchAsyncError(async (req, res, next) => {
  try {
    const { title, description, isActive } = req.body;

    // Allowed enum values
    const allowedTitles = [
      "Free cancellation till 24 hours before check-in",
      "Free cancellation till 48 hours before check-in",
      "Free cancellation till 72 hours before check-in",
      "Non-refundable",
    ];

    if (!title || !allowedTitles.includes(title)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid or missing title. Allowed values are: " +
          allowedTitles.join(", "),
      });
    }

    const newCancellation = await CancellationTypeModel.create({
      title,
      description,
      isActive,
    });

    res.status(201).json({
      success: true,
      message: "Cancellation policy created successfully",
      data: newCancellation,
    });
  } catch (error) {
    console.error("Error creating cancellation policy:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create cancellation policy",
      error: error.message,
    });
  }
});

// checkinout-policy => /api/v1/policy/checkinout-policy
exports.newCheckInOutPolicy = catchAsyncError(async (req, res, next) => {
  try {
    const { checkInTime, checkOutTime, is24HourCheckInOut } = req.body;
    // Basic Validation
    if (!checkInTime || !checkOutTime) {
      return res.status(400).json({
        success: false,
        message: "checkInTime and checkOutTime are required",
      });
    }
    const newPolicy = await CheckInOutPolicyModel.create({
      checkInTime,
      checkOutTime,
      is24HourCheckInOut,
    });
    res.status(201).json({
      success: true,
      message: "Check-In/Out policy created successfully",
      data: newPolicy,
    });
  } catch (error) {
    console.error("Error creating Check-In/Out policy:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Check-In/Out policy",
      error: error.message,
    });
  }
});

// custome-policy => /api/v1/policy/custom-policy
exports.newCustomRule = catchAsyncError(async (req, res, next) => {
  try {
    const { ruleTitle, isActive } = req.body;

    // Validation: ruleTitle required
    if (!ruleTitle || ruleTitle.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "ruleTitle is required",
      });
    }

    const newRule = await CustomRulesModel.create({
      ruleTitle,
      isActive,
    });

    res.status(201).json({
      success: true,
      message: "Custom rule created successfully",
      data: newRule,
    });
  } catch (error) {
    console.error("Error creating custom rule:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create custom rule",
      error: error.message,
    });
  }
});

// property-rule => /api/v1/policy/property-rule
exports.newPropertyRule = catchAsyncError(async (req, res, next) => {
  try {
    const {
      ruleKey,
      question,
      type = "Yes/No",
      options = [],
      idProofOptions = [],
    } = req.body;

    // Validate required fields
    if (!ruleKey || !question) {
      return res.status(400).json({
        success: false,
        message: "ruleKey and question are required",
      });
    }

    // Validate type and options logic
    const allowedTypes = [
      "Yes/No",
      "Dropdown",
      "Multi-Select",
      "Text",
      "IdProofs",
    ];
    if (!allowedTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message: `Invalid type. Allowed values: ${allowedTypes.join(", ")}`,
      });
    }

    // If type requires options but none provided
    if (
      (type === "Dropdown" || type === "Multi-Select") &&
      options.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Options must be provided for Dropdown or Multi-Select type",
      });
    }

    // If type is IdProofs but no IDs are passed
    if (type === "IdProofs" && idProofOptions.length === 0) {
      return res.status(400).json({
        success: false,
        message: "idProofOptions must be provided for IdProofs type",
      });
    }

    const newRule = await PropertyRuleModel.create({
      ruleKey,
      question,
      type,
      options,
      idProofOptions,
    });

    res.status(201).json({
      success: true,
      message: "Property rule created successfully",
      data: newRule,
    });
  } catch (error) {
    console.error("Error creating property rule:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create property rule",
      error: error.message,
    });
  }
});



// smoking-policy => /api/v1/policy/smoking-policy
exports.newSmokingPolicy  = catchAsyncError(async (req, res, next) => {
   try {
    const { policyName, description, allowedRoomCount, isActive } = req.body;

    const allowedPolicies = [
      "Smoking Allowed",
      "Non-Smoking",
      "Smoking in Designated Areas"
    ];

    if (!policyName || !allowedPolicies.includes(policyName)) {
      return res.status(400).json({
        success: false,
        message: `Invalid or missing policyName. Allowed values: ${allowedPolicies.join(", ")}`
      });
    }

    // Create document
    const newPolicy = await SmokingPolicyModel.create({
      policyName,
      description,
      allowedRoomCount,
      isActive
    });

    res.status(201).json({
      success: true,
      message: "Smoking policy created successfully",
      data: newPolicy
    });
  } catch (error) {
    console.error("Error creating smoking policy:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create smoking policy",
      error: error.message
    });
  }
});
