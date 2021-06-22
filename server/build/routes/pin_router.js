"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PinUtil_1 = require("../utils/PinUtil");
const NAMESPACE = "pinRouter";
let pinRouter = express_1.Router();
pinRouter.get("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let pin = PinUtil_1.pinUtilObj.get(id);
    // console.log({ id, pin })
    res.json(pin);
});
pinRouter.delete("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let pin = PinUtil_1.pinUtilObj.delete(id);
    // console.log({ id, pin })
    if (pin) {
        res.status(204).json(pin);
    }
    else {
        res.status(304);
    }
});
pinRouter.put("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let data = req.body;
    let pin = PinUtil_1.pinUtilObj.update(id, data);
    // console.log({ id, pin, data })
    if (pin) {
        res.status(202).json(pin);
    }
    else {
        res.status(304);
    }
});
pinRouter.patch("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let data = req.body;
    let pin = PinUtil_1.pinUtilObj.update(id, data);
    // console.log({ id, pin, data })
    if (pin) {
        res.status(202).json(pin);
    }
    else {
        res.status(304);
    }
});
exports.default = pinRouter;
