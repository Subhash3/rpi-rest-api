"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinUtilObj = void 0;
const onoff_1 = require("onoff");
const gpio_1 = require("../config/gpio");
class PinUtil {
    counter;
    pins;
    constructor() {
        this.counter = 0;
        this.pins = [];
    }
    getAllPins() {
        return JSON.parse(JSON.stringify(this.pins));
    }
    get(id) {
        let filtered = this.pins.filter((pin) => {
            return pin.id === id;
        });
        if (filtered.length === 0) {
            return null;
        }
        return filtered[0];
    }
    create(data) {
        let pin = {
            id: this.counter,
            ...data,
        };
        this.counter += 1;
        this.pins.push(pin);
        let pinObj = new onoff_1.Gpio(pin.pinNum, gpio_1.MODES.OUT);
        if (pin.state.toLocaleLowerCase() === "on") {
            pinObj.writeSync(onoff_1.Gpio.HIGH);
        }
        else if (pin.state.toLocaleLowerCase() === "off") {
            pinObj.writeSync(onoff_1.Gpio.LOW);
        }
        return pin;
    }
    update(id, data) {
        let pin = this.get(id);
        if (pin === null) {
            return null;
        }
        let pinObj = new onoff_1.Gpio(pin.pinNum, gpio_1.MODES.OUT);
        // We can do this cuz pin is a refernce and not the actual value of the object
        pin.color = data.color;
        pin.pinNum = data.pinNum;
        pin.state = data.state;
        if (pin.state.toLocaleLowerCase() === "on") {
            pinObj.writeSync(onoff_1.Gpio.HIGH);
        }
        else if (pin.state.toLocaleLowerCase() === "off") {
            pinObj.writeSync(onoff_1.Gpio.LOW);
        }
        return pin;
    }
    delete(id) {
        let pin = this.get(id);
        if (pin === null) {
            return null;
        }
        let pinObj = new onoff_1.Gpio(pin.pinNum, gpio_1.MODES.OUT);
        pinObj.writeSync(onoff_1.Gpio.LOW);
        this.pins = this.pins.filter((pin) => pin.id !== id);
        return pin;
    }
}
exports.pinUtilObj = new PinUtil();
exports.default = PinUtil;
