"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pin_list_router_1 = __importDefault(require("./pin_list_router"));
const pin_router_1 = __importDefault(require("./pin_router"));
const dht_router_1 = __importDefault(require("./dht_router"));
const NAMESPACE = "Routes";
const routes = express_1.Router();
routes.use("/", pin_list_router_1.default);
routes.use("/", pin_router_1.default);
routes.use("/dht", dht_router_1.default);
exports.default = routes;
