"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODES = void 0;
const onoff_1 = __importDefault(require("onoff"));
const Gpio = onoff_1.default.Gpio;
const NAMESPACE = "gpio";
const MODES = {
    OUT: "out",
    IN: "in",
};
exports.MODES = MODES;
const STATES = {
    ON: Gpio.HIGH,
    OFF: Gpio.LOW,
};
