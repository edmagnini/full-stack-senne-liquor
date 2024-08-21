const express = require("express");
const MedicoController = require("../controllers/medicoController")

const medicoRouter = express.Router()
const medicoController = new MedicoController()

medicoRouter.get("/", (req, res, next) => medicoController.getMedico(req, res, next))

module.exports = medicoRouter