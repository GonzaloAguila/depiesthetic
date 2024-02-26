export type Item = {
    label: string;
    value: string;
    price: string | number;
};

export type Zone = {
    label: string;
    code: string;
    items: Item[];
};