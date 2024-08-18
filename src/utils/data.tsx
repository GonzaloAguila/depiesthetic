import { Item, Location, Plan } from "../models/data.model";

export const locations: Location[] = [
  Location.RAMOS,
  Location.CABA
];
export const plans: Plan[] = [Plan.ONE, Plan.THREE, Plan.SIX];


export const MujerRamosPromotions: Item[] = [
  { label: "Cavado completo + axilas", value: "PROMO01", price: 12500 },
  { label: "Cavado completo + tira de cola", value: "PROMO02", price: 12500 },
  {
    label: "Cavado completo + tira de cola + axilas",
    value: "PROMO03",
    price: 15000,
  },
  {
    label: "Cavado completo + tira de cola + axilas + bozo",
    value: "PROMO04",
    price: 16500,
  },
  {
    label: "Media pierna + cavado completo + axilas",
    value: "PROMO05",
    price: 17500,
  },
  {
    label: "Media pierna + cavado completo + tira de cola + axilas",
    value: "PROMO06",
    price: 19000,
  },
  {
    label: "Pierna completas + axilas",
    value: "PROMO07",
    price: 18500,
  },
  {
    label: "Pierna entera + cavado completo",
    value: "PROMO08",
    price: 18500,
  },
  {
    label: "Pierna entera + cavado completo + axilas",
    value: "PROMO09",
    price: 19500,
  },
  {
    label: "Pierna entera + cavado completo + tira",
    value: "PROMO10",
    price: 19500,
  },
  {
    label: "Pierna entera + cavado completo + tira + axilas",
    value: "PROMO11",
    price: 22000,
  },
  {
    label: "Pierna entera + cavado completo + tira + axilas + bozo",
    value: "PROMO12",
    price: 25000,
  },
  {
    label: "Pierna entera + cavado completo + tira + axilas + glúteos",
    value: "PROMO13",
    price: 27000,
  },
  {
    label: "Pierna entera + cavado + tira + axilas + rostro completo",
    value: "PROMO14",
    price: 28000,
  },
  {
    label: "Media pierna + cavado",
    value: "PROMO15",
    price: 15000,
  },
  {
    label: "Media pierna + axilas",
    value: "PROMO16",
    price: 15000,
  },
  {
    label: "Media pierna + cavado completo + tira",
    value: "PROMO17",
    price: 17500,
  },
  {
    label: "Bozo + mentón",
    value: "PROMO18",
    price: 7500,
  },
  {
    label: "Pierna entera + cavado completo + tira + axilas + bozo - mentón",
    value: "PROMO19",
    price: 26500,
  },
  {
    label: "Pierna entera + cavado + tira + axilas + brazos completos",
    value: "PROMO20",
    price: 29500,
  },
];

export const MujerCabaPromotions: Item[] = [
  { label: "Cavado completo + axilas", value: "PROMO01", price: 24000 },
  { label: "Cavado completo + tira de cola", value: "PROMO02", price: 24000 },
  {
    label: "Cavado completo + tira de cola + axilas",
    value: "PROMO03",
    price: 27000,
  },
  {
    label: "Cavado completo + tira de cola + axilas + bozo",
    value: "PROMO04",
    price: 29500,
  },
  {
    label: "Media pierna + cavado completo + axilas",
    value: "PROMO05",
    price: 30500,
  },
  {
    label: "Media pierna + cavado completo + tira de cola + axilas",
    value: "PROMO06",
    price: 34500,
  },
  {
    label: "Pierna completas + axilas",
    value: "PROMO07",
    price: 35500,
  },
  {
    label: "Pierna entera + cavado completo",
    value: "PROMO08",
    price: 35500,
  },
  {
    label: "Pierna entera + cavado completo + axilas",
    value: "PROMO09",
    price: 38000,
  },
  {
    label: "Pierna entera + cavado completo + tira",
    value: "PROMO10",
    price: 38000,
  },
  {
    label: "Piernas completas + cavado completo + tira + axilas",
    value: "PROMO11",
    price: 42000,
  },
  {
    label: "Pierna entera + cavado completo + tira + axilas + bozo",
    value: "PROMO12",
    price: 44500,
  },
  {
    label: "Piernas completas + cavado completo + tira + axilas + glúteos",
    value: "PROMO13",
    price: 47500,
  },
  {
    label: "Pierna entera + cavado + tira + axilas + rostro completo",
    value: "PROMO14",
    price: 47500,
  },
  {
    label: "Media pierna + cavado",
    value: "PROMO15",
    price: 27500,
  },
  {
    label: "Media pierna + axilas",
    value: "PROMO16",
    price: 27500,
  },
  {
    label: "Media pierna + cavado completo + tira",
    value: "PROMO17",
    price: 30500,
  },
  {
    label: "Bozo + mentón",
    value: "PROMO18",
    price: 10500,
  },
  {
    label: "Pierna entera + cavado completo + tira + axilas + bozo - mentón",
    value: "PROMO19",
    price: 46500,
  },
  {
    label: "Pierna entera + cavado + tira + axilas + brazos completos",
    value: "PROMO20",
    price: 52500,
  },
];


export const MujerCaba = [
  {
    label: "Zona alta",
    items: [
      { label: "Cuello", value: "CUE", price: 9500 },
      { label: "Hombros", value: "HOM", price: 9500 },
      { label: "Pecho", value: "PEC", price: 13000 },
      { label: "Espalda", value: "ESP", price: 16500 }, // Espalda completa
      { label: "Frente", value: "FRE", price: 6500 },
      { label: "Entrecejo", value: "ENT", price: 6500 },
      { label: "Mejillas", value: "MEJ", price: 6500 },
      { label: "Patillas", value: "PAT", price: 6500 },
      { label: "Mentón", value: "MEN", price: 6500 },
      { label: "Nariz", value: "NAR", price: 6500 },
      { label: "Orejas", value: "ORE", price: 8500 },
      { label: "Nuca", value: "NUC", price: 7500 },
      { label: "Rostro Completo", value: "ROS_COM", price: 17500 },
      { label: "Labios", value: "LAB", price: 9500 },
      { label: "Escote", value: "ESC", price: 9500 },
    ],
  },
  {
    label: "Zona media",
    items: [
      { label: "Cintura", value: "CIN", price: 9500 },
      { label: "Linea alba", value: "LIN", price: 7500 },
      { label: "Linea Alba Extendida", value: "LIN_EXT", price: 8500 },
      { label: "Linea de Pecho", value: "LIN_PEC", price: 7500 },
      { label: "Medio brazo", value: "MBR", price: 14000 },
      { label: "Glúteos", value: "GLU", price: 11500 },
      { label: "Medio Glúteo", value: "MED_GLU", price: 8500 },
      { label: "Pelvis", value: "PEL", price: 12500 },
      { label: "Costillas", value: "COS", price: 13500 },
      { label: "Abdomen", value: "ABD", price: 9000 },
      { label: "Torax (Costillas + Pecho)", value: "TOR", price: 16500 },
    ],
  },
  {
    label: "Zona baja",
    items: [
      { label: "Axilas", value: "AXI", price: 9500 },
      { label: "Brazos", value: "BRA", price: 19500 },
      { label: "Manos", value: "MAN", price: 9500 },
      { label: "Dedos Manos", value: "DED_MAN", price: 8500 },
      { label: "Dedos Pie", value: "DED_PIE", price: 8500 },
      { label: "Dedo Gordo del Pie", value: "DED_GOR", price: 7500 },
      { label: "Pies", value: "PIE", price: 9500 },
      { label: "Cavado Bikini", value: "CAV_BIK", price: 12500 },
      { label: "Cavado Completo", value: "CAV_COM", price: 14500 },
      { label: "Media Pierna", value: "MED_PIE", price: 20500 },
      { label: "Muslo Anterior", value: "MUS_ANT", price: 16500 },
      { label: "Muslo Posterior", value: "MUS_POS", price: 16500 },
      { label: "Piernas Completas", value: "PIER_COM", price: 27500 },
      { label: "Rodillas", value: "ROD", price: 8500 },
      { label: "Tira de Cola", value: "TIR", price: 9500 },
    ],
  },
  {
    label: "Cuerpo completo",
    items: [{ label: "Cuerpo completo", value: "CCP", price: 139000 }],
  },
];

export const MujerRamos = [
  {
    label: "Zona alta",
    items: [
      { label: "Cuello", value: "CUE", price: 7500 },
      { label: "Hombros", value: "HOM", price: 9000 },
      { label: "Pecho", value: "PEC", price: 8500 },
      { label: "Espalda", value: "ESP", price: 12500 },
      { label: "Torax", value: "TOR", price: 11500 }, // Torax is Pecho + Costillas
      { label: "Frente", value: "FRE", price: 6000 },
      { label: "Entrecejo", value: "ENT", price: 6000 },
      { label: "Mejillas", value: "MEJ", price: 6000 },
      { label: "Patillas", value: "PAT", price: 6000 },
      { label: "Mentón", value: "MEN", price: 6000 },
      { label: "Nariz", value: "NAR", price: 6000 },
      { label: "Nuca", value: "NUC", price: 6000 },
      { label: "Rostro Completo", value: "ROS_COM", price: 11500 },
      { label: "Labios", value: "LAB", price: 7000 },
      { label: "Escote", value: "ESC", price: 6500 },
    ],
  },
  {
    label: "Zona media",
    items: [
      { label: "Cintura", value: "CIN", price: 7000 },
      { label: "Linea alba", value: "LIN", price: 6000 },
      { label: "Linea Alba Extendida", value: "LIN_EXT", price: 7000 },
      { label: "Linea de Pecho", value: "LIN_PEC", price: 7500 },
      { label: "Medio brazo", value: "MBR", price: 10500 },
      { label: "Glúteos", value: "GLU", price: 7500 },
      { label: "Medio Glúteo", value: "MED_GLU", price: 6500 },
      { label: "Pelvis", value: "PEL", price: 12500 }, // Added pelvis as it fits in middle zone
      { label: "Costillas", value: "COS", price: 8500 },
      { label: "Abdomen", value: "ABD", price: 8000 },
    ],
  },
  {
    label: "Zona baja",
    items: [
      { label: "Axilas", value: "AXI", price: 7000 },
      { label: "Brazos", value: "BRA", price: 12500 },
      { label: "Manos", value: "MAN", price: 6500 },
      { label: "Dedos Manos", value: "DED_MAN", price: 6500 },
      { label: "Dedos Pie", value: "DED_PIE", price: 6500 },
      { label: "Dedo Gordo del Pie", value: "DED_GOR", price: 6500 },
      { label: "Pies", value: "PIE", price: 6500 },
      { label: "Cavado Bikini", value: "CAV_BIK", price: 8500 },
      { label: "Cavado Completo", value: "CAV_COM", price: 9500 },
      { label: "Cavado Extendido", value: "CAV_EXT", price: 10500 }, // Added Cavado Extendido
      { label: "Media Pierna", value: "MED_PIE", price: 12500 },
      { label: "Muslo Anterior/Posterior", value: "MUS", price: 10500 }, // Combined anterior/posterior as one item
      { label: "Piernas Completas", value: "PIER_COM", price: 15500 },
      { label: "Rodillas", value: "ROD", price: 6500 },
      { label: "Tira de Cola", value: "TIR", price: 7500 },
    ],
  },
  {
    label: "Cuerpo completo",
    items: [{ label: "Cuerpo completo", value: "CCP", price: 80000 }], // No price update provided
  },
];

export const HombreCaba = [
  {
    label: "Zona alta",
    items: [
      { label: "Cuello", value: "CUE", price: 12500 },
      { label: "Hombros", value: "HOM", price: 11500 },
      { label: "Pecho", value: "PEC", price: 15500 },
      { label: "Espalda", value: "ESP", price: 17500 },
      { label: "Torax (Costillas)", value: "TOR", price: 16500 },
      { label: "Frente", value: "FRE", price: 8500 },
      { label: "Entrecejo", value: "ENT", price: 8500 },
      { label: "Mejillas (Pómulos)", value: "MEJ", price: 8500 },
      { label: "Patillas", value: "PAT", price: 8500 },
      { label: "Nariz", value: "NAR", price: 8500 },
      { label: "Nuca", value: "NUC", price: 9500 },
      { label: "Orejas", value: "ORE", price: 9500 },
      { label: "Barba", value: "BAR", price: 16500 },
      { label: "Bigotes", value: "BIG", price: 9500 },
      { label: "Rostro Completo", value: "ROS_COM", price: 19500 },
    ],
  },
  {
    label: "Zona media",
    items: [
      { label: "Cintura", value: "CIN", price: 9500 },
      { label: "Linea alba", value: "LIN", price: 8500 },
      { label: "Linea Alba Extendida", value: "LIN_EXT", price: 9500 },
      { label: "Medio brazo", value: "MBR", price: 17500 },
      { label: "Glúteos", value: "GLU", price: 13500 },
      { label: "Costillas", value: "COS", price: 15000 },
      { label: "Abdomen", value: "ABD", price: 10500 },
    ],
  },
  {
    label: "Zona baja",
    items: [
      { label: "Axilas", value: "AXI", price: 10500 },
      { label: "Brazos Superiores", value: "BRS", price: 16500 },
      { label: "Brazos", value: "BRA", price: 21000 },
      { label: "Manos", value: "MAN", price: 9500 },
      { label: "Dedos Manos", value: "DED_MAN", price: 9500 },
      { label: "Dedos Pie", value: "DED_PIE", price: 9500 },
      { label: "Dedo Gordo del Pie", value: "DED_GOR", price: 8500 },
      { label: "Pies", value: "PIE", price: 9500 },
      { label: "Cavado Hombre (No Genitales)", value: "CAV_HOM", price: 16500 },
      { label: "Media Pierna", value: "MED_PIE", price: 21000 },
      { label: "Muslos", value: "MUS", price: 20500 },
      { label: "Rodillas", value: "ROD", price: 9500 },
      { label: "Submenton", value: "SUB", price: 8500 },
      { label: "Tira de Cola", value: "TIR", price: 10500 },
    ],
  },
  {
    label: "Cuerpo completo",
    items: [{ label: "Cuerpo completo", value: "CCP", price: 160000 }],
  },
];

export const HombreRamos = [
  {
    label: "Zona alta",
    items: [
      { label: "Cuello", value: "CUE", price: 8500 },
      { label: "Hombros", value: "HOM", price: 9500 },
      { label: "Pecho", value: "PEC", price: 9500 },
      { label: "Espalda", value: "ESP", price: 13500 },
      { label: "Torax (Costillas)", value: "TOR", price: 12500 },
      { label: "Frente", value: "FRE", price: 6000 },
      { label: "Entrecejo", value: "ENT", price: 6000 },
      { label: "Mejillas (Pómulos)", value: "MEJ", price: 6000 },
      { label: "Patillas", value: "PAT", price: 6000 },
      { label: "Nariz", value: "NAR", price: 6000 },
      { label: "Nuca", value: "NUC", price: 6000 },
      { label: "Orejas", value: "ORE", price: 6000 },
      { label: "Barba", value: "BAR", price: 10500 },
      { label: "Bigotes", value: "BIG", price: 8500 },
      { label: "Rostro Completo", value: "ROS_COM", price: 12500 },
    ],
  },
  {
    label: "Zona media",
    items: [
      { label: "Cintura", value: "CIN", price: 7500 },
      { label: "Linea alba", value: "LIN", price: 7000 },
      { label: "Linea Alba Extendida", value: "LIN_EXT", price: 8000 },
      { label: "Medio brazo", value: "MBR", price: 11500 },
      { label: "Glúteos", value: "GLU", price: 8500 },
      { label: "Costillas", value: "COS", price: 10500 },
      { label: "Abdomen", value: "ABD", price: 8500 },
    ],
  },
  {
    label: "Zona baja",
    items: [
      { label: "Axilas", value: "AXI", price: 7500 },
      { label: "Brazos Superiores", value: "BRS", price: 11500 },
      { label: "Brazos Completos", value: "BRA", price: 13500 },
      { label: "Manos", value: "MAN", price: 6000 },
      { label: "Dedos Manos", value: "DED_MAN", price: 7500 },
      { label: "Dedos Pie", value: "DED_PIE", price: 7500 },
      { label: "Dedo Gordo del Pie", value: "DED_GOR", price: 6500 },
      { label: "Pies", value: "PIE", price: 7500 },
      { label: "Cavado Hombre (No Genitales)", value: "CAV_HOM", price: 10500 },
      { label: "Media Pierna", value: "MED_PIE", price: 16000 },
      { label: "Muslo Anterior/Posterior", value: "MUS", price: 15000 },
      { label: "Rodillas", value: "ROD", price: 6000 },
      { label: "Submenton", value: "SUB", price: 6000 },
      { label: "Tira de Cola", value: "TIR", price: 6000 },
    ],
  },
  {
    label: "Cuerpo completo",
    items: [{ label: "Cuerpo completo", value: "CCP", price: 90000 }],
  },
];


export const bodyDictionary = {
  ABD: "Abdomen",
  ANT: "Antebrazos",
  ARE: "Areolas",
  AXI: "Axilas",
  BRA: "Brazos",
  BOZ: "Bozo",
  CAV_BIK: "Cavado Bikini",
  CAV_COM: "Cavado Completo",
  CIN: "Cintura",
  COS: "Costillas",
  CUE: "Cuello",
  DED_PIE: "Dedos Pie",
  DED_MAN: "Dedos Manos",
  DED_GOR: "Dedo Gordo del Pie",
  ENT: "Entrecejo",
  ENT_PIE: "Entrepierna",
  ESC: "Escote",
  ESP_COM: "Espalda Completa",
  ESP_INF: "Espalda Inferior",
  ESP_MED: "Espalda Media",
  ESP_SUP: "Espalda Superior",
  FRE: "Frente",
  GLU: "Glúteos",
  HOM: "Hombros",
  LAB: "Labios",
  LIN: "Linea alba",
  LIN_EXT: "Linea Alba Extendida",
  LIN_PEC: "Linea de Pecho",
  MAN: "Manos",
  MED_PIE: "Media Pierna",
  MBR: "Medio Brazo",
  MED_GLU: "Medio Glúteo",
  MEN: "Mentón",
  MEJ: "Mejillas (Pómulos)",
  MUS_ANT: "Muslo Anterior",
  MUS_POS: "Muslo Posterior",
  NAR: "Nariz",
  NUC: "Nuca",
  PAT: "Patillas",
  PEL: "Pelvis",
  ORE: "Orejas",
  PEC: "Pecho",
  PIER_COM: "Piernas Completas",
  PIE: "Pies",
  ROD: "Rodillas",
  ROS_COM: "Rostro Completo",
  SUB: "Submenton",
  TIR: "Tira de Cola",
  TOR: "Torax (Costillas + Pecho)",
};

export const promotions = [{key: Location.RAMOS, value: MujerRamosPromotions}, {key: Location.CABA, value: MujerCabaPromotions}]
