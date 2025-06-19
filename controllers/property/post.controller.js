
const catchAsyncError = require("../../middlewares/catchAsyncError");
const DocsModel = require("../../models/property/docsModel");
const PropertyDetailModel = require("../../models/property/propertyDetailModel");
const PropertyImageModel = require("../../models/property/propertyImageModel");
const PropertyOwnershipTypeModel = require("../../models/property/propertyOwnerShipTypeMode");
const RoomDetailModel = require("../../models/property/roomDetailModel");

// docs => /api/v1/property/docs
exports.newDocs = catchAsyncError(async (req, res, next) => {
  try {
    const { gstNumber, gstCertificateImage, cancelledChequeImage, isActive } =
      req.body;

    const newDocs = await DocsModel.create({
      gstNumber,
      gstCertificateImage,
      cancelledChequeImage,
      isActive,
    });

    res.status(201).json({
      success: true,
      message: "Document details created successfully",
      data: newDocs,
    });
  } catch (error) {
    console.error("Error creating docs:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create document details",
      error: error.message,
    });
  }
});

// property -image => /api/v1/property/property-img
exports.newPropertyImages = catchAsyncError(async (req, res, next) => {
   try {
    const data = req.body;

    const newImages = await PropertyImageModel.create(data);

    res.status(201).json({
      success: true,
      message: "Property images saved successfully",
      data: newImages,
    });
  } catch (error) {
    console.error("Image Upload Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to save property images",
      error: error.message,
    });
  }
});



// property -ownership => /api/v1/property/property-ownership-type
exports.newPropertyOwnerShip = catchAsyncError(async (req, res, next) => {
    try {
    const { ownershipType, isActive } = req.body;

    // Create a new document
    const newOwnershipType = new PropertyOwnershipTypeModel({
      ownershipType,
      isActive, // Optional, defaults to true
    });

    const saved = await newOwnershipType.save();
    res.status(201).json({ message: "Ownership type created", data: saved });
  } catch (error) {
    // Handle duplicate error
    if (error.code === 11000) {
      return res.status(400).json({ message: "Ownership type already exists" });
    }
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});


// property -detail => /api/v1/property/property-detail
exports.newPropertyDetail = catchAsyncError(async (req, res) => {
  try {
    const {
      property_name,
      property_display_name,
      property_description,
      year_of_construction,
      no_of_rooms,
      total_no_rooms,
      no_of_allocated_to_pyolliv,
      no_of_restarants,
      no_of_floors,
      primary_ph_num,
      secondary_ph_num,
      property_email,
      channel_manager_applicable,
      company_name,
      property_amenities,
      checkin_checkout_policy
    } = req.body;

    // Required fields check (optional)
    if (!property_name || !property_display_name) {
      return res.status(400).json({
        success: false,
        message: "Property name and display name are required",
      });
    }

    const newProperty = await PropertyDetailModel.create({
      property_name,
      property_display_name,
      property_description,
      year_of_construction,
      no_of_rooms,
      total_no_rooms,
      no_of_allocated_to_pyolliv,
      no_of_restarants,
      no_of_floors,
      primary_ph_num,
      secondary_ph_num,
      property_email,
      channel_manager_applicable,
      company_name,
      property_amenities,
      checkin_checkout_policy
    });

    res.status(201).json({
      success: true,
      message: "Property created successfully",
      data: newProperty,
    });
  } catch (error) {
    console.error("Error creating property:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create property",
      error: error.message,
    });
  }
});


// room -detail => /api/v1/property/room-detail
exports.newRoomDetail = catchAsyncError(async (req, res) => {
 try {
    const {
      room_display_name,
      room_description,
      total_rooms,
      basic_adults,
      max_adults,
      max_occupancy,
      num_of_max_children,
      num_of_rooms,
      extra_bed,
      extra_person,
      single_guest_price,
      double_guest_price,
      triple_guest_price,
      extra_adult_charge,
      child_above7_charge,
      child_below6_charge,
      smoking_policy,
      room_size,
      room_view,
      bed_view,
      room_type,
      room_amenities
    } = req.body;

    // Validate required fields
    if (!room_display_name) {
      return res.status(400).json({
        success: false,
        message: "room_display_name is required",
      });
    }

    // Create room detail
    const newRoom = await RoomDetailModel.create({
      room_display_name,
      room_description,
      total_rooms,
      basic_adults,
      max_adults,
      max_occupancy,
      num_of_max_children,
      num_of_rooms,
      extra_bed,
      extra_person,
      single_guest_price,
      double_guest_price,
      triple_guest_price,
      extra_adult_charge,
      child_above7_charge,
      child_below6_charge,
      smoking_policy,
      room_size,
      room_view,
      bed_view,
      room_type,
      room_amenities
    });

    res.status(201).json({
      success: true,
      message: "Room created successfully",
      data: newRoom
    });
  } catch (error) {
    console.error("Error creating room:", error.message);
    res.status(500).json({
      success: false,
      message: "Room creation failed",
      error: error.message
    });
  }
});