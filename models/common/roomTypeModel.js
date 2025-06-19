const mongoose =require ("mongoose")

const RoomTypeSchema = new mongoose.Schema(
  {
    roomType: {
      type: String,
      trim: true
    },
    is_active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

const RoomTypeModel = mongoose.model('RoomType', RoomTypeSchema);

module.exports =RoomTypeModel;

