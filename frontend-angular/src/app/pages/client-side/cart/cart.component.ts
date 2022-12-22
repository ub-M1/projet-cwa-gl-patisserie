import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Produit';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData: Cart = new Cart;

  constructor(private cartService: CartService, private userService: UserService, private route: Router) { 
    this.cartService.cart.subscribe((cartData) => {
      this.cartData = cartData;
      console.log(cartData);
    });

    this.cartData.addProduct(new Product({
      id:1,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Palmeras_de_hojaldre_1.jpg/280px-Palmeras_de_hojaldre_1.jpg',
      categorie: "je"
    }))

    this.cartData.addProduct(new Product({
      id:2,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Palmeras_de_hojaldre_1.jpg/280px-Palmeras_de_hojaldre_1.jpg',
      categorie: "je"
    }))
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

    if(this.userService.isAuth()){
      this.route.navigateByUrl('payement')
    } else{
      this.route.navigate(['login', "payement"])

    }


  }

  ngOnInit(): void {
  }

}
