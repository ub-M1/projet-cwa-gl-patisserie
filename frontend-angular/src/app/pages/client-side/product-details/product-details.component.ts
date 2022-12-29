import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  quantity = 0

  constructor(private route:ActivatedRoute, private router: Router, private apiService: ApiService, private cartService: CartService) {
    this.cartService.cart.subscribe(panier => {
      this.cart = panier;
    })
   }

  ngOnInit(): void {
    this.apiService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log('response :>> ', response[0]);
          this.product = response[0]
          console.log('this.product :>> ', this.product);

        },
        (error) => {//Error callback
          console.error('error caught in component', error)

        //throw error;   //You can also throw the error to a global error handler
        }
  )

  }

  addOne(){
    console.log("adding one");
    this.cartService.add(this.product!)

    
  }

  removeOne(){
    this.cartService.decrease(this.product!)
  }

  addToCart(){
    if(this.product){
      if(this.cart.getCartItem(this.product._id)){
        this.router.navigateByUrl('cart')
      }

    }
  }

}
