import { Router } from "express";
import { IFC_PIN_MODEL, IFC_PIN_DATA } from "../config/Types";
import { pinUtilObj } from "../utils/PinUtil";

const NAMESPACE = "pinRouter";

let pinRouter = Router();

pinRouter.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let pin = pinUtilObj.get(id);

  // console.log({ id, pin })

  res.json(pin);
});

pinRouter.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let pin = pinUtilObj.delete(id);

  // console.log({ id, pin })

  if (pin) {
    res.status(204).json(pin);
  } else {
    res.status(304);
  }
});

pinRouter.put("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let data: IFC_PIN_DATA = req.body;

  let pin = pinUtilObj.update(id, data);

  // console.log({ id, pin, data })

  if (pin) {
    res.status(202).json(pin);
  } else {
    res.status(304);
  }
});

pinRouter.patch("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let data: IFC_PIN_DATA = req.body;

  let pin = pinUtilObj.update(id, data);

  // console.log({ id, pin, data })

  if (pin) {
    res.status(202).json(pin);
  } else {
    res.status(304);
  }
});

export default pinRouter;
