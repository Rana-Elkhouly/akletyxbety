export class Prod{
    _id!: string;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    __v!: number
}
export class Use{
    role!: string;
    _id!: string;
    fullName!: string;
    email!: string;
    password!: string;
    city!: string;
    streetAddress!: string;
    number!: number;
    saltSecret!: string;
    __v!: number
}
export class Item {
    _id!:string;
    productId!: Prod [];
    price: number;
    quantity!: number;
    createdAt!: string;
    updatedAt!: string;
}
export class Dash {
    total!: number;
    _id!: string;
    items: Item [];
    userId: Use [];
    createdAt!: string;
    updatedAt!: string;
    __v!: number;
}