const response = require("./../response");
const db = require("./../settings/db");

exports.users = (req, res) => {
  const allUsers = "SELECT * FROM users";
  db.query(allUsers, async (error, rows, fields) => {
    if (error) {
      console.log("Error", error);
    } else {
      response.status(rows, res);
    }
  });
};

exports.add = (req, res) => {
  const sql =
    "INSERT INTO `users`(`id`,`name`, `second_name`, `email`)  VALUES('" +
    req.query.id +
    "', '" +
    req.query.name +
    "', '" +
    req.query.second_name +
    "', '" +
    req.query.email +
    "')";
  db.query(sql, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      response.status(results, res);
    }
  });
};