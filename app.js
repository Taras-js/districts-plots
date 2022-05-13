const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require("./settings/routes");
routes(app);
const PORT = process.env.PORT || 6000;

async function start() {
  try {
    app.listen(PORT, () => console.log(`App launched on port ${PORT}...`));
  } catch (e) {
    console.log("server error", e.message);
    process.exit(1);
  }
}

start();
