import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Produit';
import { ApiService } from 'src/app/services/api.service';
import { ProduitServiceService } from 'src/app/services/produit-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  pro:Product[] | undefined;
  subPs!: Subscription;
  produitsList: Product[] = []
  constructor(private apiService: ApiService) {  this.getProducts()}

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

}
