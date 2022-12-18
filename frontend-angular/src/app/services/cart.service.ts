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

  add(product: Product) {
    this.cart.value.addProduct(product);
  }

  addMany(product: Product, qty:  number) {
    this.cart.value.setQuantity(product, qty);
  }

  decrease(product: Product) {
    this.cart.value.decreaseProduct(product)
  }

  remove(product: Product){
    this.cart.value.removeProduct(product);
  }

  clear(){
    this.cart.value.cart_item = []
  }

  update(){
    console.log(this.cart.value);
  }

  totalPrice(){
    return this.cart.value.getTotalPrice()
  }

}
