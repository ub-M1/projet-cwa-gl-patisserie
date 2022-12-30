import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Produit';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart : BehaviorSubject<Cart> = new BehaviorSubject<Cart>(new Cart());
  public cartData!: Cart;

  constructor() {

    this.cart.subscribe(panier => {
      this.cartData = panier;
    })
    let data = localStorage.getItem('cart');
    if(data){
      let c: Cart = JSON.parse(data)

      this.cartData.id = c.id
      this.cartData.total_price = c.total_price
      this.cartData.cart_item = []

      c.cart_item.forEach(element => {
        this.cartData.cart_item.push(new CartItem(element.product, element.quantite))
      });

      console.log('this.cartData value:>> ', this.cart.value);
      
    }

    console.log('this.cartData value:>> ', this.cartData);

  }

  add(product: Product) {
    this.cart.value.addProduct(product);
    this.update();
  }

  addMany(product: Product, qty:  number) {
    this.cart.value.setQuantity(product, qty);
    this.update();

  }

  decrease(product: Product) {
    this.cart.value.decreaseProduct(product)
    this.update();

  }

  remove(product: Product){
    this.cart.value.removeProduct(product);
    this.update();

  }

  clear(){
    this.cart.value.cart_item = []
    this.update();

  }

  update(){
    console.log(this.cart.value);
    localStorage.setItem('cart', JSON.stringify(this.cartData))
  }

  totalPrice(){
    return this.cart.value.getTotalPrice()
  }

  count(){
    return this.cartData.getCount();
  }

}
