const mongoose = require("mongoose");

const RoomDetailSchema = new mongoose.Schema(
  {
   

    room_display_name: {
      type: String,
    },

    room_description: {
      type: String,
      default: "",
    },

    total_rooms: {
      type: Number,
      default: 1,
    },

    basic_adults: {
      type: Number,
      default: 2,
    },

    max_adults: {
      type: Number,
      default: 3,
    },

    max_occupancy: {
      type: Number,
      default: 3,
    },
    
    num_of_max_children: {
      type: Number,
      default: 2,
    },

    num_of_rooms: {
      type: Number,
      default: 1,
    },

    extra_bed: {
      type: Boolean,
      default: false,
    },

    extra_person: {
      type: Boolean,
      default: false,
    },

    single_guest_price: {
      type: Number,
      default: 0,
    },

    double_guest_price: {
      type: Number,
      default: 0,
    },

    triple_guest_price: {
      type: Number,
      default: 0,
    },

    extra_adult_charge: {
      type: Number,
      default: 0,
    },

    child_above7_charge: {
      type: Number,
      default: 0,
    },

    child_below6_charge: {
      type: Number,
      default: 0,
    },

    smoking_policy: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SmokingPolicy",
    }
    ],

    room_size: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomSizeUnit",
    }
    ],

    room_view: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomView",
    }
    ],

    bed_type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "BedType",
    }],

    room_type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomType",
    }],

    room_amenities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AmenitiesType",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const RoomDetailModel = mongoose.model("RoomDetail", RoomDetailSchema);

module.exports = RoomDetailModel;
