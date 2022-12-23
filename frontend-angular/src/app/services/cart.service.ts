import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/Cart';
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
      this.cartData = JSON.parse(data)
      console.log('this.cartData :>> ', this.cartData);
      
    }
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
    localStorage.setItem('cart', JSON.stringify(this.cart.value))
  }

  totalPrice(){
    return this.cart.value.getTotalPrice()
  }

  count(){
    return this.cart.value.getCount();
  }

}
