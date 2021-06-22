"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
const middleware_1 = require("./config/middleware");
const routes_1 = __importDefault(require("./routes/routes"));
const NAMESPACE = "Server";
const app = express_1.default();
/** Middleware**/
middleware_1.injectLoggerMiddleware(NAMESPACE, app);
/** To parse the body of the request */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/** Rules of our API */
app.use(middleware_1.corsResolver);
/** Routes go here */
app.use(routes_1.default);
/** Error handling */
app.use(middleware_1.invalidRouteHandler);
const httpServer = http_1.default.createServer(app);
httpServer.listen(config_1.default.server.port, () => {
    logging_1.default.info(NAMESPACE, `Server is running ${config_1.default.server.hostname}:${config_1.default.server.port}`);
});
