const mongoose = require("mongoose");

const PropertyDetailSchema = new mongoose.Schema(
  {
    property_name: {
      type: String,
      trim: true
    },
    property_display_name: {
      type: String,
     trim: true
    },
    property_description: {
      type: String,
      default: ''
    },
    year_of_construction: {
      type: Number
    },
    no_of_rooms: {
      type: Number,
      default: 0
    },
    total_no_rooms: {
      type: Number,
      default: 0
    },
    no_of_allocated_to_pyolliv: {
      type: Number,
      default: 0
    },
    no_of_restarants: {
      type: Number,
      default: 0
    },
    no_of_floors: {
      type: Number,
      default: 0
    },
    primary_ph_num: {
      type: String
    },
    secondary_ph_num: {
      type: String
    },
    property_email: {
      type: String
    },
    channel_manager_applicable: {
      type: Boolean,
      default: false
    },
    company_name: {
      type: String
    },
    property_amenities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AmenitiesCategory'
      }
    ],
 
  },
  {
    timestamps: true
  }
);

const PropertyDetailModel = mongoose.model('PropertyDetail', PropertyDetailSchema);

module.exports = PropertyDetailModel;