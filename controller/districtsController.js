const response = require("./../response");
const db = require("./../settings/db");

exports.districts = (req, res) => {
  const sql = "SELECT id, ntaname AS name, st_area(coordinates)AS area FROM geodistricts";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
exports.plots = (req, res) => {
  const sql = "SELECT geodistricts.id, SUM(MBRContains(geodistricts.coordinates, geoplots.coord)) AS sum FROM geodistricts, geoplots WHERE geodistricts.id > 180 GROUP BY geodistricts.id LIMIT 2";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }

  });
};
exports.geo = (req, res) => {
  const sql = "SELECT id, name, geometry AS area FROM geo";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
