const response = require("./../response");
const db = require("./../settings/db");

const sqlRequestAllePlots = "SELECT id, bbl, area, districts FROM  tmp_plot ORDER BY id";
const sqlRequestPlotsLimit__10 = "SELECT id, bbl FROM  tmp_plot ORDER BY id LIMIT 10";
const sqlRequestPlotsMinMaxSize = "SELECT MIN(ABS(area)) AS min, MAX(ABS(area)) AS max FROM  tmp_plot";

exports.plots = (req, res) => {
  db.query(sqlRequestAllePlots, async (error, rows) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
exports.bbl = (req, res) => {
  db.query(sqlRequestPlotsLimit__10, async (error, rows) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
exports.size = (req, res) => {

  db.query(sqlRequestPlotsMinMaxSize, async (error, rows) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};

exports.search = (req, res) => {
  const payload = req.body.payload;

  const sqlRequestSearchPlotsFromBbl = "SELECT id, bbl, area, districts FROM tmp_plot WHERE bbl LIKE '" + payload + "%' LIMIT 20";
  db.query(sqlRequestSearchPlotsFromBbl, async (error, rows) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
exports.plot = (req, res) => {
  const payload = req.body.payload;
    const sql =
    "SELECT id, bbl, area, districts FROM tmp_plot WHERE bbl LIKE '" +
    payload +
    "'";
  db.query(sql, async (error, rows) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};

exports.delete = (req, res) => {
  const payload = req.body.payload;
  console.log(payload);
  const sql =
    "DELETE FROM tmp_plot WHERE area > " +
    payload.after +
    " AND area < " +
    payload.before +
    " ORDER BY area";
  db.query(sql, async (error, rows) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
