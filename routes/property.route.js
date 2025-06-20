const express = require("express");
const {
  newDocs,
  newPropertyImages,
  newPropertyOwnerShip,
  newPropertyDetail,
  newRoomDetail,
} = require("../controllers/property/post.controller");
const { getAllDocs, getAllPropertyImage, getAllPropertyOwnershipType, getAllPropertyDetail, getAllRoomDetail } = require("../controllers/property/get.controller");
const { getSingleDocs, getSinglePropertyImage, getSinglePropertyOwnershipType, getSinglePropertyDetail, getSingleRoomDetail } = require("../controllers/property/get.single.controller");
const { updateDocs, updatePropertyImage, updatePropertyOwnershipType, updatePropertyDetail, updateRoomDetail } = require("../controllers/property/put.controller");
const { deleteDocs, deletePropertyImage, deletePropertyOwnershipType, deletePropertyDetail, deleteRoomDetail } = require("../controllers/property/delete.controller");
const propertyRouter = express.Router();

// Correct way to handle POST request
propertyRouter.route("/docs").post(newDocs);
propertyRouter.route("/property-img").post(newPropertyImages);
propertyRouter.route("/property-ownership-type").post(newPropertyOwnerShip);
propertyRouter.route("/property-detail").post(newPropertyDetail);
propertyRouter.route("/room-detail").post(newRoomDetail);


// Correct way to handle GET ALL request
propertyRouter.route("/docs").get(getAllDocs);
propertyRouter.route("/property-img").get(getAllPropertyImage);
propertyRouter.route("/property-ownership-type").get(getAllPropertyOwnershipType);
propertyRouter.route("/property-detail").get(getAllPropertyDetail);
propertyRouter.route("/room-detail").get(getAllRoomDetail);


// Correct way to handle GET SINGLE request
propertyRouter.route("/docs/:id").get(getSingleDocs);
propertyRouter.route("/property-img/:id").get(getSinglePropertyImage);
propertyRouter.route("/property-ownership-type/:id").get(getSinglePropertyOwnershipType);
propertyRouter.route("/property-detail/:id").get(getSinglePropertyDetail);
propertyRouter.route("/room-detail/:id").get(getSingleRoomDetail);


// Correct way to handle PUT request
propertyRouter.route("/docs/:id").put(updateDocs);
propertyRouter.route("/property-img/:id").put(updatePropertyImage);
propertyRouter.route("/property-ownership-type/:id").put(updatePropertyOwnershipType);
propertyRouter.route("/property-detail/:id").put(updatePropertyDetail);
propertyRouter.route("/room-detail/:id").put(updateRoomDetail);



// Correct way to handle DELETE request
propertyRouter.route("/docs/:id").delete(deleteDocs);
propertyRouter.route("/property-img/:id").delete(deletePropertyImage);
propertyRouter.route("/property-ownership-type/:id").delete(deletePropertyOwnershipType);
propertyRouter.route("/property-detail/:id").delete(deletePropertyDetail);
propertyRouter.route("/room-detail/:id").delete(deleteRoomDetail);

module.exports = propertyRouter;
