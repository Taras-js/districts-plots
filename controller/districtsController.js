const response = require("./../response");
const db = require("./../settings/db");
const districtsJson = require("../data/districts.json");
const plotsJson = require("../data/plots.json");
// console.log(districtsJson.features.map(item => item.properties.ntaname))
// console.log(districtsJson.features.map(item => {
//     return { geometry: item.geometry.coordinates.flat(3)
// }}))

exports.districts = (req, res) => {
  const allDistricts = "SELECT * FROM geo";
  db.query(allDistricts, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};

