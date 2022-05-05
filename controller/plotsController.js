const response = require("./../response");
const db = require("./../settings/db");

exports.plots = (req, res) => {
  const sql = "SELECT id, bbl, area, districts FROM  tmp_plots ORDER BY id";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
exports.bbl = (req, res) => {
  const sql = "SELECT id, bbl FROM  geoplots ORDER BY id LIMIT 10";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
exports.size = (req, res) => {
  const sql = "SELECT MIN(area) AS min, MAX(area) AS max FROM  tmp_plots";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};

exports.search = (req, res) => {
  const payload = req.body.payload
  const sql = "SELECT id, bbl, area, districts FROM tmp_plots WHERE bbl LIKE '" + payload + "%' LIMIT 20";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};
exports.plot = (req, res) => {
  const payload = req.body.payload
  const sql = "SELECT id, bbl, area, districts FROM tmp_plots WHERE bbl LIKE '" + payload + "'";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};

exports.delete = (req, res) => {
  const payload = req.body.payload
  const sql = "DELETE FROM tmp_plots WHERE " + payload.after + " < area < " + payload.before + " ORDER BY area";
  db.query(sql, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  })
};