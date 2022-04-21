const response = require("./../response");

exports.index = (req, res) => {
  response.status("Hello REST API districts && plots", res);
};