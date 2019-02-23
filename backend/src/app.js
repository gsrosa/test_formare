const express = require("express"),
  load = require("express-load"),
  cors = require("cors"),
  morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("combined"));

load("routes", { cwd: "src" })
  .then("routes")
  .into(app);

module.exports = app;
