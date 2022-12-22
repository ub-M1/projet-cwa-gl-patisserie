import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Produit';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {
  produitsList: Product[] = []

  searchterm =""

  searchResult: Product[] = []

  constructor(private apiService: ApiService, private router: Router) {
    this.getProducts()

   }


  // Méthode pour soumettre le formulaire de contact
  submitForm(form: any): void {
    console.log(form.value);
  }

  
  ngOnInit(): void {
  }

  getProducts(){
    this.apiService.getProductsList().subscribe(
      (response)=>{
        console.log('response :>> ', response);
        this.produitsList = response.map( (product: any) =>{
          let p: Product = new Product(product)
          p.image = "assets/images/image1.jpg"
          return p;
        })
      },
      (error) => {
        console.error(error)
      }
    )
  }

  gotodetail(p:Product){
    this.router.navigateByUrl('product/'+p._id)
  }

  productBySearch(){
    return this.produitsList.filter((p) => p.designation?.toLowerCase().includes(this.searchterm.toLowerCase()))
  }
}

 