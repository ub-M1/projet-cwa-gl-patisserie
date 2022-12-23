import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Produit';
import { ApiService } from 'src/app/services/api.service';
import { ProduitServiceService } from 'src/app/services/produit-service.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})
export class AjoutProduitComponent implements OnInit {
 fileText!: string;
 subAdd!: Subscription;
 imageUrl!: string;
 nom!:string;
 c!:string;
 prix!:number;
 quantitemax = 0
 description:string = ""
 categorie: Category={
  idCategorie:0,
  nomcategorie:""
 }

 categories: Category[] = []

 to:string="../../../../assets/icons/user.png";
   @ViewChild("textarea") textarea!: { nativeElement: { value: any; }; };
  
 constructor(private router: Router, private ap:ProduitServiceService, private apiService: ApiService)  {

  }

  ngOnInit(): void {
    this.getCategories()
  }
Ajout(f:NgForm){
 const id=this.ap.getProducts().value.length;

 
  let designation=this.nom;
  let categorie=this.c;
  let prixunitaire=this.prix;
  let image=this.imageUrl;
  let description= this.textarea.nativeElement.value;;
  
  const text = this.textarea.nativeElement.value;
  let p= new Product({id,designation,prixunitaire,image,description,categorie});
  this.ap.AjoutProduit(p);
 
}
updateFileText(text: string) {
  this.fileText = text;

}
uploadImage(event:any) {
  const file = event.target.files[0].name;
 this.imageUrl=file;
 this.to="../../../../assets/icons/"+this.imageUrl;
 console.log(this.to);
}

getCategories(){
  this.apiService.getCategories().subscribe(
    (response)=>{
      console.log('response categori :>> ', response);
      this.categories = response
    },
    (error) => {
      console.error(error)
    }
  )
}

getSelectedCategori(): Category{
  let cat: Category[] = this.categories.filter((c: Category) => c.nomcategorie==this.categorie.nomcategorie )

  if(cat.length!=0){
    return cat[0];
  }
  
  // this.addCategorie()
  return this.categorie
}

addCategorie() {
  this.apiService.addCategorie({nomcategorie: this.categorie.nomcategorie}).subscribe(
    (response)=>{
      console.log('response categori :>> ', response);
      this.categorie = {
        idCategorie: response,
        nomcategorie: this.categorie.nomcategorie
      }
    },
    (error) => {
      console.error(error)
    }
  )
}

addProduct(){

  
  
  let product = {
    "designation": this.nom,
    "prixunitaire": this.prix,
    "image": "https://learn.microsoft.com/fr-fr/windows/win32/learnwin32/images/window01.png",
    "quantitemax": this.quantitemax,
    "description": this.description,
    "idCategorie": this.getSelectedCategori()
  }

  this.apiService.addProduct(product).subscribe(
    (response)=>{
      console.log('response product :>> ', response);

      Swal.fire({
        title: 'Succes!',
        text: 'Commande validee avec success',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      Swal.hideLoading()

      this.router.navigateByUrl('admin/liste-product')

    },
    (error) => {
      console.error(error)
    }
  )
}




}
