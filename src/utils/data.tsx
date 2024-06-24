import { Item, Location, Plan } from "../models/data.model";

export const locations: Location[] = [
  Location.RAMOS,
  Location.BELGRANO,
  Location.CABALLITO,
  Location.PALERMO,
];
export const plans: Plan[] = [Plan.ONE, Plan.THREE, Plan.SIX];
export const promotions: Item[] = [
  { label: "Cavado completo + axilas", value: "PROMO01", price: 17500 },
  { label: "Cavado completo + tira de cola", value: "PROMO02", price: 17500 },
  {
    label: "Cavado completo + tira de cola + axilas",
    value: "PROMO03",
    price: 19500,
  },
  {
    label: "Cavado completo + tira de cola + axilas + bozo",
    value: "PROMO04",
    price: 21500,
  },
];

export const MujerCaba = [
  {
    label: "Zona alta",
    items: [
      { label: "Cabeza", value: "CAB", price: 6500 },
      { label: "Cuello", value: "CUE", price: 8500 },
      { label: "Hombros", value: "HOM", price: 7500 },
      { label: "Pecho", value: "PEC", price: 10500 },
      { label: "Espalda", value: "ESP", price: 11500 },
      { label: "Torax", value: "TOR", price: 13500 },
    ],
  },
  {
    label: "Zona media",
    items: [
      { label: "Cintura", value: "CIN", price: 7500 },
      { label: "Linea alba", value: "LIN", price: 6500 },
      { label: "Medio brazo", value: "MBR", price: 10500 },
      { label: "Mejillas", value: "MEJ", price: 5500 },
    ],
  },
  {
    label: "Zona baja",
    items: [
      { label: "Axilas", value: "AXI", price: 7500 },
      { label: "Brazos", value: "BRA", price: 12500 },
      { label: "Manos", value: "MAN", price: 6500 },
      { label: "Pies", value: "PIE", price: 7500 },
    ],
  },
  {
    label: "Cuerpo completo",
    items: [{ label: "Cuerpo completo", value: "CCP", price: 10500 }],
  },
];


export const MujerRamos = [
  {
    label: "Zona alta",
    items: [
      { label: "Cabeza", value: "CAB", price: 6500 },
      { label: "Cuello", value: "CUE", price: 8500 },
      { label: "Hombros", value: "HOM", price: 7500 },
      { label: "Pecho", value: "PEC", price: 10500 },
      { label: "Espalda", value: "ESP", price: 11500 },
      { label: "Torax", value: "TOR", price: 13500 },
    ],
  },
  {
    label: "Zona media",
    items: [
      { label: "Cintura", value: "CIN", price: 7500 },
      { label: "Linea alba", value: "LIN", price: 6500 },
      { label: "Medio brazo", value: "MBR", price: 10500 },
      { label: "Mejillas", value: "MEJ", price: 5500 },
    ],
  },
  {
    label: "Zona baja",
    items: [
      { label: "Axilas", value: "AXI", price: 7500 },
      { label: "Brazos", value: "BRA", price: 12500 },
      { label: "Manos", value: "MAN", price: 6500 },
      { label: "Pies", value: "PIE", price: 7500 },
    ],
  },
  {
    label: "Cuerpo completo",
    items: [{ label: "Cuerpo completo", value: "CCP", price: 10500 }],
  },
];

export const HombreCaba = [
  {
    label: "Zona alta",
    items: [
      { label: "Cabeza", value: "CAB", price: 6500 },
      { label: "Cuello", value: "CUE", price: 8500 },
      { label: "Hombros", value: "HOM", price: 9500 },
      { label: "Pecho", value: "PEC", price: 10500 },
      { label: "Espalda", value: "ESP", price: 13500 },
      { label: "Torax (costillas)", value: "TOR", price: 13500 },
    ],
  },
  {
    label: "Zona media",
    items: [
      { label: "Cintura", value: "CIN", price: 7500 },
      { label: "Linea alba", value: "LIN", price: 6500 },
      { label: "Medio brazo", value: "MBR", price: 10500 },
      { label: "Mejillas (pómulos)", value: "MEJ", price: 6500 },
    ],
  },
  {
    label: "Zona baja",
    items: [
      { label: "Axilas", value: "AXI", price: 7500 },
      { label: "Brazos superiores", value: "BRS", price: 10500 },
      { label: "Manos", value: "MAN", price: 6500 },
      { label: "Pies", value: "PIE", price: 7500 },
    ],
  },
  {
    label: "Cuerpo completo",
    items: [{ label: "Cuerpo completo", value: "CCP", price: 105000 }],
  },
];


export const HombreRamos = [
  {
    label: "Zona alta",
    items: [
      { label: "Cabeza", value: "CAB", price: 6500 },
      { label: "Cuello", value: "CUE", price: 8500 },
      { label: "Hombros", value: "HOM", price: 9500 },
      { label: "Pecho", value: "PEC", price: 10500 },
      { label: "Espalda", value: "ESP", price: 13500 },
      { label: "Torax (costillas)", value: "TOR", price: 13500 },
    ],
  },
  {
    label: "Zona media",
    items: [
      { label: "Cintura", value: "CIN", price: 7500 },
      { label: "Linea alba", value: "LIN", price: 6500 },
      { label: "Medio brazo", value: "MBR", price: 10500 },
      { label: "Mejillas (pómulos)", value: "MEJ", price: 6500 },
    ],
  },
  {
    label: "Zona baja",
    items: [
      { label: "Axilas", value: "AXI", price: 7500 },
      { label: "Brazos superiores", value: "BRS", price: 10500 },
      { label: "Manos", value: "MAN", price: 6500 },
      { label: "Pies", value: "PIE", price: 7500 },
    ],
  },
  {
    label: "Cuerpo completo",
    items: [{ label: "Cuerpo completo", value: "CCP", price: 105000 }],
  },
];

export const bodyDictionary = {
  CAB: "Cabeza",
  CUE: "Cuello",
  HOM: "Hombros",
  PEC: "Pecho",
  ESP: "Espalda",
  TOR: "Torax",
  CIN: "Cintura",
  LIN: "Linea alba",
  MBR: "Medio brazo",
  MEJ: "Mejillas",
  AXI: "Axilas",
  BRA: "Brazos",
  MAN: "Manos",
  PIE: "Pies",
  CCP: "Cuerpo completo",
};
