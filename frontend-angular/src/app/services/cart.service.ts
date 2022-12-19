import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/Cart';
import { Product } from '../models/Produit';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart : BehaviorSubject<Cart> = new BehaviorSubject<Cart>(new Cart());



  constructor() {}

  add(product: Product, qty = 1) {
    this.cart.value.addProduct(product, qty);
    // this.update()
  }

  decrease(product: Product) {
    this.cart.value.decreaseProduct(product)
    // this.update()
  }

  remove(product: Product){
    this.cart.value.removeProduct(product);
    // this.update();
  }

  clear(){
    this.cart.value.cart_item = []
  }

  update(){
    console.log(this.cart.value);
    // this.cart.next(this.localCart);
  }

  totalPrice(){
    return this.cart.value.getTotalPrice()
  }




  // submitCheckout(userId, cart) {
  //   return this._api.postTypeRequest('orders/create', {
  //     userId: userId,
  //     cart: cart,
  //   });
  // }
}
