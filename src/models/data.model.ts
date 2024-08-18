export type Item = {
    label: string;
    value: string;
    price: number;
};

export type Zone = {
    label: string;
    items: Item[];
};

export enum Plan {
    ONE = '1 sesión',
    THREE = '3 sesiones',
    SIX = '6 sesiones'
}

export enum Location {
    RAMOS = 'R.Mejía',
    CABA = 'CABA'

}