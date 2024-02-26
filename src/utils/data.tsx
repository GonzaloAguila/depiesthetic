import { Item } from '../models/data.model';

export const locations: string[] = ['Caballito', 'Palermo', 'Belgrano', 'R. Mejía'];
export const plans: string[] = ['1 sesión', '3 sesiones', '6 sesiones'];
export const promotions: Item[] = [
    { label: 'Cavado completo + axilas', value: 'PROMO01', price: 17500 },
    { label: 'Cavado completo + tira de cola', value: 'PROMO02', price: 17500 },
    { label: 'Cavado completo + tira de cola + axilas', value: 'PROMO03', price: 19500 },
    { label: 'Cavado completo + tira de cola + axilas + bozo', value: 'PROMO04', price: 21500 },
];
export const zones = [
    {
        label: 'Zona alta',
        items: [
            { label: 'Bozo', value: 'BOZ', price: 5500 },
            { label: 'Cuello', value: 'CUE', price: 6500 },
            { label: 'Labios', value: 'LAB', price: 7500 },
            { label: 'Mentón', value: 'MENT', price: 5500 },
            { label: 'Mejillas', value: 'MEJ', price: 5500 },
            { label: 'Patillas', value: 'PAT', price: 5500 },
            { label: 'Rostro', value: 'ROST', price: 10500 },
        ],
    },
    {
        label: 'Zona media',
        items: [
            { label: 'Abdomen', value: 'ABD', price: 7500 },
            { label: 'Antebrazos', value: 'ANT', price: 8500 },
            { label: 'Axilas', value: 'AXI', price: 6500 },
            { label: 'Medio brazo', value: 'MED', price: 9500 },
            { label: 'Brazos', value: 'BRA', price: 11500 },
            { label: 'Cintura', value: 'CIN', price: 5500 },
            { label: 'Espalda', value: 'ESP', price: 11500 },
            { label: 'Línea alba', value: 'ALB', price: 5500 },
            { label: 'Torax', value: 'TOR', price: 9500 },
        ],
    },
    {
        label: 'Zona baja',
        items: [
            { label: 'Cavado', value: 'CAV', price: 9500 },
            { label: 'Dedos de pie', value: 'DED', price: 5500 },
            { label: 'Glúteos', value: 'GLUT', price: 8000 },
            { label: '1/2 Pierna', value: 'MPIE', price: 12500 },
            { label: 'Muslos', value: 'MUS', price: 9500 },
            { label: 'Piernas', value: 'PIER', price: 19500 },
            { label: 'Pies', value: 'PIES', price: 6500 },
            { label: 'Rodillas', value: 'RODI', price: 5500 },
            { label: 'Tira de cola', value: 'TIR', price: 5500 },
        ],
    },
];
