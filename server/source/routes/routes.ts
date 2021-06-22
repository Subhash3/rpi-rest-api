import { Router } from "express";
import pinListRouter from "./pin_list_router";
import pinRouter from "./pin_router";
import dhtRouter from './dht_router'

const NAMESPACE = "Routes";

const routes = Router();

routes.use("/", pinListRouter);
routes.use("/", pinRouter);
routes.use("/dht", dhtRouter);

export default routes;
