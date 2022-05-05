const districtsController = require("../controller/districtsController");
const plotsController = require("../controller/plotsController");

module.exports = (app) => {
  app.route("/districts").get(districtsController.districts);
  app.route("/plots/size").get(plotsController.size);
  app.route("/plots/bbl").get(plotsController.bbl);
  app.route("/plots").get(plotsController.plots);
  app.route("/plots/search").post(plotsController.search);
  app.route("/plots/plot").post(plotsController.plot);
  app.route("/plots/delete").post(plotsController.delete);
};