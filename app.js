const express = require("express");
const app = express();
const router = require("./Router/index");
const mongoose = require("mongoose");
const { default: Axios } = require("axios");

const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", router);
const port = 8080;
app.listen(port, (req, res) => {
  console.log(`server is running on port:${port}`);
});
