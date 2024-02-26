import { Item } from "../models/data.model";

export const locations: string[] = ['Caballito', 'Palermo', 'Belgrano', 'R. Mejía'];
export const plans: string[] = ['1 sesión', '3 sesiones', '6 sesiones'];
export const promotions: Item[] = [
    { label: 'Cavado completo + axilas', value: 'PROMO1', price: 17500 },
    { label: 'Cavado completo + tira de cola', value: 'PROMO1', price: 17500 },
    { label: 'Cavado completo + tira de cola + axilas', value: 'PROMO1', price: 19500 },
    { label: 'Cavado completo + tira de cola + axilas + bozo', value: 'PROMO1', price: 21500 },
];
export const zones = [
    {
        label: 'Zona alta',
        code: 'DE',
        items: [
            { label: 'Bozo', value: 'BOZ', price: 10 },
            { label: 'Cuello', value: 'CUE', price: 10 },
            { label: 'Frente', value: 'FRE', price: 10 },
        ],
    },
    {
        label: 'Zona media',
        code: 'US',
        items: [
            { label: 'Abdomen', value: 'ABD', price: 10 },
            { label: 'Antebrazos', value: 'ANT', price: 10 },
            { label: 'Areolas', value: 'ARE', price: 10 },
        ],
    },
    {
        label: 'Zona baja',
        code: 'JP',
        items: [
            { label: '1/2 Pierna', value: 'MPIE', price: 10 },
            { label: 'Bikini comun', value: 'BIKC', price: 10 },
            { label: 'Bikini extendida', value: 'BIKE', price: 10 },
        ],
    },
];
