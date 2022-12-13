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


    this.cartData.addProduct(new Product({
      id:1,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'http://sqjcndkj.png',
      categorie: "je"
    }))

    this.cartData.addProduct(new Product({
      id:2,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'http://sqjcndkj.png',
      categorie: "je"
    }))
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

  ngOnInit(): void {
  }

}
