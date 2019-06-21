export interface Cart {
    [key: string]: number;
}

export interface Item {
    id: string;
    title: string;
    image: string;
    description: string;
    cost: number;
    totalCost?: number;
}
