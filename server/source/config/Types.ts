export interface IFC_PIN_MODEL {
  id: number; // The Unique Pin Identifier
  pinNum: number; // Gpio Pin associated with this endpoint
  color: string; // Color of the string
  state: string; // LED ON or OFF
}

export interface IFC_PIN_DATA {
  pinNum: number; // Gpio Pin associated with this endpoint
  color: string; // Color of the string
  state: string; // LED ON or OFF
}
