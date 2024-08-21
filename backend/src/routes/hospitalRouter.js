const express = require("express");
const HospitalController = require("../controllers/hospitalController")

const hospitalRouter = express.Router()
const hospitalController = new HospitalController()

hospitalRouter.get("/", (req, res, next) => hospitalController.getHospital(req, res, next))

module.exports = hospitalRouter