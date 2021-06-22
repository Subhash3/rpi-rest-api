"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PinUtil_1 = require("../utils/PinUtil");
const NAMESPACE = "pinListRouter";
let pinListRouter = express_1.Router();
pinListRouter.get("/", (req, res) => {
    let allPins = PinUtil_1.pinUtilObj.getAllPins();
    res.json(allPins);
});
pinListRouter.post("/", (req, res) => {
    let body = req.body;
    let createdPin = PinUtil_1.pinUtilObj.create(body);
    res.status(200).json({
        message: "Created",
        pin: createdPin,
    });
});
exports.default = pinListRouter;
