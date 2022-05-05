// const alles_districts ="CREATE TABLE alles1 AS
// SELECT geodistricts.id, geodistricts.ntaname, st_area(geodistricts.coordinates)
// AS area, SUM(MBRContains(geodistricts.coordinates, geoplots.coord)) AS sum FROM
// geodistricts, geoplots WHERE geodistricts.id BETWEEN 0 AND 30 GROUP BY geodistricts.id"


// const db = require("../settings/db");
// const response = require("../response");
// exports.contains = (req, res) => {
//   const sql =
//     "SELECT geodistricts.id, SUM(MBRContains(geodistricts.coordinates, geoplots.coord)) AS sum FROM geodistricts, geoplots WHERE geodistricts.id BETWEEN 0 AND 10 GROUP BY geodistricts.id";
//   db.query(sql, async (error, rows, fields) => {
//     if (error) {
//       console.log("Error", error);
//     } else {
//       response.status(rows, res);
//     }
//   });
// };