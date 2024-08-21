const express = require("express");
const UsuarioController = require("../controllers/usuarioController")
const { validateLogin, validateRegister } = require("../middlewares/validationMiddleWare")

const usuarioRouter = express.Router()
const usuarioController = new UsuarioController()

usuarioRouter.post("/login", validateLogin, (req, res, next) => usuarioController.loginUsuario(req, res, next))
usuarioRouter.post("/register", validateRegister, (req, res, next) => usuarioController.registerUsuario(req, res, next))
usuarioRouter.post("/refresh-token", (req, res, next) => usuarioController.refreshToken(req, res, next))
usuarioRouter.post("/send-location", (req, res, next) => usuarioController.registerLocation(req, res, next))

module.exports = usuarioRouter