import http from "http";
import express from "express";
import logging from "./config/logging";
import config from "./config/config";
import {
  corsResolver,
  invalidRouteHandler,
  injectLoggerMiddleware,
} from "./config/middleware";
import routes from "./routes/routes";

const NAMESPACE = "Server";
const app = express();

/** Middleware**/
injectLoggerMiddleware(NAMESPACE, app);

/** To parse the body of the request */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Rules of our API */
app.use(corsResolver);

/** Routes go here */
app.use(routes);

/** Error handling */
app.use(invalidRouteHandler);

const httpServer = http.createServer(app);

httpServer.listen(config.server.port, () => {
  logging.info(
    NAMESPACE,
    `Server is running ${config.server.hostname}:${config.server.port}`
  );
});
