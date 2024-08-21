const Authenticator = require("../utils/authenticator");
const ExceptionHandler = require("../utils/exceptionHandler")


const ensureAuthenticated = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return next(ExceptionHandler.forbidden("Não autenticado"));
    }

    const [type, token] = authorization.split(' ');

    if (type !== 'Bearer') {
        return next(ExceptionHandler.forbidden("Não autenticado"));
    }

    // Verifica o token JWT
    const jwtData = new Authenticator().getTokenData(token);

    if (!jwtData) {
        return next(ExceptionHandler.forbidden("Não autenticado"));
    }
    req.user = jwtData

    return next();
};

module.exports = ensureAuthenticated