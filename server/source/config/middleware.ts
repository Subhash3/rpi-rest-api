import { NextFunction, Request, Response, Router } from "express";
import logging from "../config/logging";

export const corsResolver = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
};

export const invalidRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new Error("Not found");

  res.status(404).json({
    message: error.message,
  });
};

export const injectLoggerMiddleware = (NAMESPACE: string, router: Router) => {
  const loggerMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    /** Log the req */
    logging.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      /** Log the res */
      logging.info(
        NAMESPACE,
        `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
      );
    });

    next();
  };

  router.use(loggerMiddleware);
};
