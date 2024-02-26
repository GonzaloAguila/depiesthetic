export type Item = {
    label: string;
    value: string;
    price: number;
};

export type Zone = {
    label: string;
    items: Item[];
};