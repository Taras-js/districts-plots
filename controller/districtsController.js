const response = require("./../response");
const db = require("./../settings/db");

exports.districts = (req, res) => {
  const sql =
    "SELECT id, ntaname AS name, ABS(area) AS area, plots FROM alles_districts ORDER BY id";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};

