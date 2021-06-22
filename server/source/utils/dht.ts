import { promises as DHTSensor } from 'node-dht-sensor'

const MAX_RETRIES = 15
const sensorGpioPin = 4
const sensorType = 11 // DHT11

DHTSensor.setMaxRetries(MAX_RETRIES)
DHTSensor.initialize(sensorType, sensorGpioPin)

async function readDHTSensor() {
    console.log("Reading dht sensor")
    try {
        let res = await DHTSensor.read(sensorType, sensorGpioPin)
        let { temperature, humidity } = res
        console.log(`Temperature: ${temperature.toFixed(2)}°C, Humidity: ${humidity.toFixed(2)}%`)
        return { temperature, humidity }
    } catch (err) {
        console.error("Failed to read sensor data:", err);
        return { message: err.message }
    }
}

export {
    readDHTSensor
}