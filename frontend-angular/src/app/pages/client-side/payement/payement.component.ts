import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
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

  ordercount= 0;

  constructor(private cartService: CartService, private router: Router, private apiService: ApiService) { }

  onSubmit(){
    // make requet to create order
    console.log(this.adresseData, this.payemenData, this.cartService.cart.value);
    // alert("commande validee avec success")

    // this.router.navigateByUrl('my-orders')

    this.checkout()

  }

  ngOnInit(): void {
  }

  checkout(){
    this.postOrder()
  }

  postOrder(){
    let order = {
      "datecommande": Date.now().toString(),
      "adresseLivraison": `${this.adresseData.fullname}|${this.adresseData.email}|${this.adresseData.tel}|${this.adresseData.codePostal}|${this.adresseData.ville}`,
      "etat": "cours",
      "idClient": {
        "idClient": 2
      }
  }
    this.apiService.postOrder(order).subscribe(
      (response) => {                           //Next callback
        console.log('response received')
        console.log('response id commande ,new :>> ', response);

        this.postLigneCOmmande(response)
      },
      (error) => {//Error callback
        console.error('error caught in component', error)
      })
  }

  postLigneCOmmande(idOrder: any){



    this.cartService.cart.value.cart_item.forEach(cartItem => {
      console.log("adding", cartItem.product.designation);
      let lignecommande = {
        "quantite": cartItem.quantite,
        "prixachat": cartItem.product.prixunitaire,
        "idCommande": {
          "idCommande": idOrder
        },
        "idProduit": {
          "idProduit": cartItem.product._id
        }
    }
    this.apiService.addLigneCommande(lignecommande).subscribe(
      (response) => {                           //Next callback
        console.log('response :>> ', response);
        this.ordercount++
        if(this.ordercount == this.cartService.cart.value.getCount()){
          alert("commande validee avec success")
          this.router.navigateByUrl('my-orders')
        }
      },
      (error) => {//Error callback
        console.error('error caught in component', error)
      })
    });
    
  }

}
