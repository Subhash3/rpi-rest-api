import { Router } from "express";
import { IFC_PIN_MODEL, IFC_PIN_DATA } from "../config/Types";
import { pinUtilObj } from "../utils/PinUtil";

const NAMESPACE = "pinListRouter";

let pinListRouter = Router();

pinListRouter.get("/", (req, res) => {
  let allPins = pinUtilObj.getAllPins();
  res.json(allPins);
});

pinListRouter.post("/", (req, res) => {
  let body: IFC_PIN_DATA = req.body;

  let createdPin = pinUtilObj.create(body);

  res.status(200).json({
    message: "Created",
    pin: createdPin,
  });
});

export default pinListRouter;
