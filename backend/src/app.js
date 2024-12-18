const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");

const api = require("./routes");

const { error, notFound } = require("./middlewares/endHandler");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", api);

app.use(error);
app.use("*", notFound);

module.exports = app;
