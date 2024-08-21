class ExceptionHandler extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }

    static badRequest(message = 'Bad Request') {
        return new ExceptionHandler(400, message);
    }

    static unauthorized(message = 'Unauthorized') {
        return new ExceptionHandler(401, message);
    }

    static forbidden(message = 'Forbidden') {
        return new ExceptionHandler(403, message);
    }

    static notFound(message = 'Not Found') {
        return new ExceptionHandler(404, message);
    }

    static internalServerError(message = 'Internal Server Error') {
        return new ExceptionHandler(500, message);
    }
}

module.exports = ExceptionHandler