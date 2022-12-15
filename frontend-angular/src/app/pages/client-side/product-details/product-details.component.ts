import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Produit';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product | undefined

  public cart!: Cart;

  constructor(private route:ActivatedRoute, private apiService: ApiService, private cartService: CartService) {
    this.cartService.cart.subscribe(panier => {
      this.cart = panier;
    })
   }

  ngOnInit(): void {
    this.product = this.apiService.getProduct(this.route.snapshot.paramMap.get('id'))

    console.log('this.product :>> ', this.product);
  }

  addOne(){
    console.log("adding one");
    this.cartService.add(this.product!)
  }

  removeOne(){
    this.cartService.decrease(this.product!)
  }

}
