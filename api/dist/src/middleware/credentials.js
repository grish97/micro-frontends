import allowedOrigins from "../configs/allowedOrigins";
export default (req, res, next) => {
    const origin = req.headers.origin || "";
    if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Credentials", "true");
    }
    next();
};
//# sourceMappingURL=credentials.js.map