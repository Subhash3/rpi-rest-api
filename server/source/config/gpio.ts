import onoff from "onoff";
const Gpio = onoff.Gpio;

const NAMESPACE = "gpio";

const MODES = {
  OUT: "out" as onoff.Direction,
  IN: "in" as onoff.Direction,
};

const STATES = {
  ON: Gpio.HIGH,
  OFF: Gpio.LOW,
};

export { MODES };
