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
  produitsList:Product[]=[]
  constructor(private ap:ProduitServiceService, private apiService: ApiService) { }

  ngOnInit(): void {
  //  this.subPs=this.ap.getProducts().subscribe((p:Product[])=>{
  //   this.pro=p;
  //  })

  this.getProducts()
  }

    getProducts(){
      this.apiService.getProductsList().subscribe(
        (response)=>{
          console.log('response :>> ', response);
          this.produitsList = response
        },
        (error) => {
          console.error(error)
        }
      )
    }

    deleteProduct(product: Product){
      console.log('id :>> ', product._id);
      this.apiService.deleteProduct(product._id).subscribe(
        (response)=>{
          console.log('response :>> ', response);
          this.getProducts()
        },
        (error) => {
          console.error(error)
        }
      )
    }

}
