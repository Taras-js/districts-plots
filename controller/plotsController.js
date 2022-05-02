const response = require("./../response");
const db = require("./../settings/db");

exports.bbl = (req, res) => {
  const sql = "SELECT bbl, st_area(coord)AS area FROM  geoplots";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
exports.max = (req, res) => {
  const sql = "SELECT MIN(ST_Area(coord)) AS minimum, MAX(ST_Area(coord)) AS maximum FROM  geoplots";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
