const indexController = require("./../controller/indexController");
const usersController = require("../controller/usersController");
const districtsController = require("../controller/districtsController");
const plotsController = require("../controller/plotsController");

module.exports = (app) => {
  app.route("/").get(indexController.index);
  app.route("/users").get(usersController.users);
  app.route("/users/add").post(usersController.add);
  app.route("/districts").get(districtsController.districts);
  app.route("/plots").get(plotsController.plots);
};