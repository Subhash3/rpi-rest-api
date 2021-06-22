import { Router } from "express"
import { readDHTSensor } from '../utils/dht'

const NAMESPACE = "DHT-Router"

let dhtRouter = Router();

dhtRouter.get("/", (req, res) => {
    readDHTSensor()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ error: "Unexpected error while reading dht!!" })
        })
});

export default dhtRouter;
