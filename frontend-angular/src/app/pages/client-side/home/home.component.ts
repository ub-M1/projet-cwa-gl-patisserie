import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Produit';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Propriété pour stocker les données du menu
  menu: any[] = [
    {
      name: 'Tarte aux pommes',
      description: 'Description de la tarte aux pommes',
      price: 10
    },
    {
      name: 'Gâteau au chocolat',
      description: 'Description du gâteau au chocolat',
      price: 10
    },
    {
      name: 'Tarte aux fruits rouges',
      description: 'Description de la tarte aux fruits rouges',
      price: 10
    },
    {
      name: 'Gâteau à la vanille',
      description: 'Description du gâteau à la vanille',
      price: 15
    },
    {
      name: 'Tarte au citron',
      description: 'Description de la tarte au citron',
      price: 10
    },
    {
      name: 'Gâteau  au chocolat blanc',
      description: 'Description du gâteau  au chocolat blanc',
      price: 10
    }
  ];

  produitsList: Product[] = []

  searchterm =""

  searchResult: Product[] = []

  categories: Category[] = []

  homeCategory = {idCategorie: 0, nomcategorie:"Tous les produits"}

  currentCategory: Category = this.homeCategory

  constructor(private apiService: ApiService, private router: Router) {
    this.getProducts()

   }


  // Méthode pour soumettre le formulaire de contact
  submitForm(form: any): void {
    console.log(form.value);
  }

  
  ngOnInit(): void {
    this.getCategories()
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

  getCategories(){
    this.apiService.getCategories().subscribe(
      (response)=>{
        console.log('response :>> ', response);
        this.categories = [this.currentCategory]
        this.categories = [...this.categories, ...response]
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

  filterbycat(cat: Category){
    this.currentCategory = cat
    let c = cat
    if(c.idCategorie == 0){
      this.getProducts()
      return
    }
    this.apiService.getProducstByCategory(cat).subscribe(
      (response)=>{
        console.log('response :>> ', response);
        this.produitsList = response
      },
      (error) => {
        console.error(error)
      }
    )
  }
}
