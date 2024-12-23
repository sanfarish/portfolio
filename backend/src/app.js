const express = require("express");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const logger = require('./middlewares/logger');
const { error, notFound } = require("./middlewares/endHandler");
const api = require("./routes");
const app = express();

app.use(logger);
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(compression());
app.use(express.json());

app.use("/api", api);

app.use(error);
app.use("*", notFound);

module.exports = app;
