"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDHTSensor = void 0;
const node_dht_sensor_1 = require("node-dht-sensor");
const MAX_RETRIES = 15;
const sensorGpioPin = 4;
const sensorType = 11; // DHT11
node_dht_sensor_1.promises.setMaxRetries(MAX_RETRIES);
node_dht_sensor_1.promises.initialize(sensorType, sensorGpioPin);
async function readDHTSensor() {
    console.log("Reading dht sensor");
    try {
        let res = await node_dht_sensor_1.promises.read(sensorType, sensorGpioPin);
        let { temperature, humidity } = res;
        console.log(`Temperature: ${temperature.toFixed(2)}°C, Humidity: ${humidity.toFixed(2)}%`);
        return { temperature, humidity };
    }
    catch (err) {
        console.error("Failed to read sensor data:", err);
        return { message: err.message };
    }
}
exports.readDHTSensor = readDHTSensor;
