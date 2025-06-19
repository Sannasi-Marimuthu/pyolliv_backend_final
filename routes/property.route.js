const express = require("express");
const {
  newDocs,
  newPropertyImages,
  newPropertyOwnerShip,
  newPropertyDetail,
  newRoomDetail,
} = require("../controllers/property/post.controller");
const propertyRouter = express.Router();

// Correct way to handle POST request
propertyRouter.route("/docs").post(newDocs);
propertyRouter.route("/property-img").post(newPropertyImages);
propertyRouter.route("/property-ownership-type").post(newPropertyOwnerShip);
propertyRouter.route("/property-detail").post(newPropertyDetail);
propertyRouter.route("/room-detail").post(newRoomDetail);

//


module.exports = propertyRouter;
