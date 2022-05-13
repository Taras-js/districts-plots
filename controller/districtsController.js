const response = require("./../response");
const db = require("./../settings/db");

exports.districts =  (req, res) => {
  const sqlRequestDistricts = "SELECT id, ntaname AS name, ABS(area) AS area, plots FROM alles_districts ORDER BY id";
   db.query(sqlRequestDistricts, async (error, rows) => {
    if (error) {
      console.log("Error", error);
    } else {
      return response.status(rows, res);
    }
  });
};

