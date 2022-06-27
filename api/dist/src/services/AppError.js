class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = 400;
        this.status = "";
        this.isOperational = true;
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        Error.captureStackTrace(this, this.constructor);
    }
}
export default AppError;
//# sourceMappingURL=AppError.js.map