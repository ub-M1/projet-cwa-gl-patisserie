import { Product } from "./Produit";

export class CartItem {

    id!: number;
    quantite!: number;
    product!: Product;
    
    constructor(product: Product, qty=1) {
        this.product = product;
        this.quantite = qty
        this.id = product._id
    }

    totalPrice(){
        return this.product.prixunitaire * this.quantite
    }

    isMaxQtyReached(): boolean{
        return this.quantite == this.product.quantitemax
    }
}