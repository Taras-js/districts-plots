const districtsController = require("../controller/districtsController");
const plotsController = require("../controller/plotsController");

module.exports = (app) => {
  app.route("/districts").get(districtsController.districts);
  app.route("/plots").get(districtsController.plots);
  app.route("/geo").get(districtsController.geo);
  app.route("/max").get(plotsController.max);
  app.route("/bbl").get(plotsController.bbl);
};