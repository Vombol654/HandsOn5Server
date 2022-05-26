const express = require("express");
const route = express.Router();
const empDetailsController = require("../Controller/employeeDetails");
route.get("/data", empDetailsController.getEmpDeatails);
module.exports = route;
