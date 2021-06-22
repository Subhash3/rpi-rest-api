"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dht_1 = require("../utils/dht");
const NAMESPACE = "DHT-Router";
let dhtRouter = express_1.Router();
dhtRouter.get("/", (req, res) => {
    dht_1.readDHTSensor()
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json({ error: "Unexpected error while reading dht!!" });
    });
});
exports.default = dhtRouter;
