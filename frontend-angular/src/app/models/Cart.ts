import { CartItem } from "./CartItem";

export class Cart {
    id!: number;
    total_price!: String;
    cart_item!: [CartItem];

    constructor(){

    }
}