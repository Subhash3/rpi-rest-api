"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectLoggerMiddleware = exports.invalidRouteHandler = exports.corsResolver = void 0;
const logging_1 = __importDefault(require("../config/logging"));
const corsResolver = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
};
exports.corsResolver = corsResolver;
const invalidRouteHandler = (req, res, next) => {
    const error = new Error("Not found");
    res.status(404).json({
        message: error.message,
    });
};
exports.invalidRouteHandler = invalidRouteHandler;
const injectLoggerMiddleware = (NAMESPACE, router) => {
    const loggerMiddleware = (req, res, next) => {
        /** Log the req */
        logging_1.default.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on("finish", () => {
            /** Log the res */
            logging_1.default.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
        });
        next();
    };
    router.use(loggerMiddleware);
};
exports.injectLoggerMiddleware = injectLoggerMiddleware;
