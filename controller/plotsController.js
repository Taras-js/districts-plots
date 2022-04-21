const response = require("./../response");
const db = require("./../settings/db");
const plotsJson = require("../data/plots.json");

exports.plots = (req, res) => {
  const allPlots = "SELECT * FROM plots";
  db.query(allPlots, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
