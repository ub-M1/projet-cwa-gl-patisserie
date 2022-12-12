import { Product } from "./Produit";

export class CartItem {

    id!: number;
    quantite!: number;
    product!: Product;
    
    constructor() {
        
    }
}