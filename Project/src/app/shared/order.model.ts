export class Item {
    productId: string;
    quantity: number;
    price: number;
}
export class Order {
    items: Item [];
    total:number;
}