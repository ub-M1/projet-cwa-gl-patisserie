import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Produit';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData: Cart = new Cart;

  constructor(private cartService: CartService) { 
    this.cartService.cart.subscribe((cartData) => {
      this.cartData = cartData;
      console.log(cartData);
    });
  }

  add(product: Product): void {
    this.cartService.add(product);
  }

  decrease(product: Product): void {
    this.cartService.decrease(product);
  }

  remove(product: Product): void {
    this.cartService.remove(product);
  }

  checkout(){
    // create Order
    console.log("cart to checkout", this.cartService.cart.value)
  }

  ngOnInit(): void {
  }

}
