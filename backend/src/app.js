const express = require("express"),
  load = require("express-load"),
  cors = require("cors");

const app = express();

app.use(cors());

load("routes", { cwd: "src" });

module.exports = app;
