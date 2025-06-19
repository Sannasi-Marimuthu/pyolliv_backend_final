const express = require("express");
const { newWebForm } = require("../controllers/web/post.controller");
const { getAllWebForms } = require("../controllers/web/get.controller");
const { getSingleWebForm } = require("../controllers/web/get.single.controller");
const { updateWebForm } = require("../controllers/web/put.controller");
const { deleteWebForm } = require("../controllers/web/delete.controller");
const webRouter = express.Router();

// Correct way to handle POST request
webRouter.route("/web-form").post(newWebForm);


webRouter.route("/web-form").get(getAllWebForms);

webRouter.route("/web-form/:id").get(getSingleWebForm);

webRouter.route("/web-form/:id").put(updateWebForm);

webRouter.route("/web-form/:id").delete(deleteWebForm);
module.exports = webRouter;
