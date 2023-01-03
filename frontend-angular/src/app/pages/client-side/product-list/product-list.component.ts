import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Produit';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {

  @Input() list: Product[] = []
  @Input() category: Category | undefined = undefined

  produitsList: Product[] = []

  searchterm =""

  searchResult: Product[] = []

  constructor(private apiService: ApiService, private router: Router) {
    //this.getProducts()

   }


  // Méthode pour soumettre le formulaire de contact
  submitForm(form: any): void {
    console.log(form.value);
  }

  
  ngOnInit(): void {
  }

  gotodetail(p:Product){
    this.router.navigateByUrl('product/'+p._id)
  }

  onSearch(event: string){
    console.log('event :>> ', event);
    this.searchterm = event
    
  }

  productBySearch(){
    return this.list.filter((p) => p.designation?.toLowerCase().includes(this.searchterm.toLowerCase()))
  }
  
}

 