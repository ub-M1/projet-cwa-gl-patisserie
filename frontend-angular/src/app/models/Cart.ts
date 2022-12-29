import { CartItem } from "./CartItem";
import { Product } from "./Produit";

export class Cart {
    id!: number;
    total_price!: number;
    cart_item!: CartItem[];

    constructor(){
        this.id = 0;
        this.total_price = 0;
        this.cart_item = new Array<CartItem>();
    }

    getCartItemIndex(productId: number){
        return this.cart_item.findIndex((prod) => prod.product._id === productId)
    }

    isProductInCart(productId: number): boolean {
        return this.getCartItemIndex(productId) !== -1;
    }

    getCartItem(productId: number){
        if(this.isProductInCart(productId)){
            return this.cart_item[this.getCartItemIndex(productId)];
        }
        return null;
    }

    getCartItemCount(productId: number): number {
        // a tester
        let ci = this.getCartItem(productId)
        if (ci) return ci.quantite
        return 0
    }

    addProduct(product : Product){
        // cette fonctionne ajoute un produit au panier
        //  Si le produit était déja dans le panier on incrémente a quantité avec qty. Par défault qty = 1. Mais lors de l'appel de la fonction on peu spécifier la quantité qu'on veut.
        //  Si la quantité est fournie laors on n'incrémente pas mais on met qty comme quantité
        let ci = this.getCartItem(product._id)
        console.log('ci :>> ', ci);
        if(ci != null){
            if (!ci.isMaxQtyReached()){
                ci.quantite ++;
            }
        } else{
            this.cart_item.push(new CartItem(product))
        }
    }

    setQuantity(product : Product, qty: number){
        if (qty <= product.quantitemax) {
            let ci = this.getCartItem(product._id)
            if(ci != null){
                ci.quantite = qty
            } else{
                this.cart_item.push(new CartItem(product, qty))
            }
        }
    }

    decreaseProduct(product : Product){
        let ci = this.getCartItem(product._id)
        if(ci != null){
            ci.quantite--;
            if(ci.quantite == 0){
                this.removeProduct(product);
            }
        }
    }

    removeProduct(product : Product){
        this.cart_item = this.cart_item.filter((cartItem) => cartItem.product._id !== product._id);
    }

    getTotalPrice() {
        let total: number = 0;
        this.cart_item.forEach(cartItem => {
            total += cartItem.totalPrice()
        });

        return total
    }

    getCount() {
        return this.cart_item.length;
    }
}