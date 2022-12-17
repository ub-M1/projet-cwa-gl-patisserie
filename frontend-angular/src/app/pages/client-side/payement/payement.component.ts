import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {

  adresseData =  {
    fullname: "",
    tel:"",
    email:"",
    adresse: "",
    codePostal: 21000,
    ville: "Dijon",
  }

  payemenData = {
    cardNumber:"",
    exp: "",
    cvc: ""
  }

  adresse: any

  order = {}

  constructor(private cartService: CartService, private router: Router) { }

  onSubmit(){
    // make requet to create order
    console.log(this.adresseData, this.payemenData, this.cartService.cart.value);
    alert("commande validee avec success")

    this.router.navigateByUrl('my-orders')

  }

  ngOnInit(): void {
  }

}
