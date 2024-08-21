const express = require("express");
const server = express();
const logMiddleware = require("./src/middlewares/logMiddleWare");
const usuarioRouter = require("./src/routes/usuarioRouter");
const chamadoRouter = require("./src/routes/chamadoRouter");
const hospitalRouter = require("./src/routes/hospitalRouter");
const medicoRouter = require("./src/routes/medicoRouter");
const ensureAuthenticated = require("./src/middlewares/ensureAuthenticates");
const ExceptionHandler = require("./src/utils/exceptionHandler");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");

server.use(cors());
server.use(express.json());
server.use(logMiddleware);

server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

server.use('/usuario', usuarioRouter);
server.use('/chamado', ensureAuthenticated, chamadoRouter);
server.use('/hospital', ensureAuthenticated, hospitalRouter);
server.use('/medico', ensureAuthenticated, medicoRouter);

server.use((err, req, res, next) => {
  console.group(err);
  if (err instanceof ExceptionHandler) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: 'Ocorreu um erro inesperado' });
});

module.exports = server;