import ExceptionHandler from './exceptionHandler.js';

const errorHandler = (err, req, res, next) => {
    if (err instanceof ExceptionHandler) {
        return res.status(err.status).json({ error: err.message });
    }

    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
};

export default errorHandler;