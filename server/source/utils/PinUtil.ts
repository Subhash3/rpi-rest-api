import { IFC_PIN_MODEL, IFC_PIN_DATA } from "../config/Types";
import onoff, { Gpio } from "onoff";
import { MODES } from "../config/gpio";

class PinUtil {
  counter: number;
  pins: IFC_PIN_MODEL[];

  constructor() {
    this.counter = 0;
    this.pins = [];
  }

  getAllPins(): IFC_PIN_MODEL[] {
    return JSON.parse(JSON.stringify(this.pins));
  }

  get(id: Number) {
    let filtered = this.pins.filter((pin) => {
      return pin.id === id;
    });

    if (filtered.length === 0) {
      return null;
    }
    return filtered[0];
  }

  create(data: IFC_PIN_DATA) {
    let pin: IFC_PIN_MODEL = {
      id: this.counter,
      ...data,
    };

    this.counter += 1;

    this.pins.push(pin);

    let pinObj = new Gpio(pin.pinNum, MODES.OUT);

    if (pin.state.toLocaleLowerCase() === "on") {
      pinObj.writeSync(Gpio.HIGH);
    } else if (pin.state.toLocaleLowerCase() === "off") {
      pinObj.writeSync(Gpio.LOW);
    }

    return pin;
  }

  update(id: number, data: IFC_PIN_DATA) {
    let pin = this.get(id);

    if (pin === null) {
      return null;
    }

    let pinObj = new Gpio(pin.pinNum, MODES.OUT);

    // We can do this cuz pin is a refernce and not the actual value of the object
    pin.color = data.color;
    pin.pinNum = data.pinNum;
    pin.state = data.state;

    if (pin.state.toLocaleLowerCase() === "on") {
      pinObj.writeSync(Gpio.HIGH);
    } else if (pin.state.toLocaleLowerCase() === "off") {
      pinObj.writeSync(Gpio.LOW);
    }

    return pin;
  }

  delete(id: number) {
    let pin = this.get(id);

    if (pin === null) {
      return null;
    }

    let pinObj = new Gpio(pin.pinNum, MODES.OUT);
    pinObj.writeSync(Gpio.LOW);

    this.pins = this.pins.filter((pin) => pin.id !== id);

    return pin;
  }
}

export const pinUtilObj = new PinUtil();

export default PinUtil;
