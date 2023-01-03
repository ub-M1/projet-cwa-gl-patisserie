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

 imageBlob: string = ""

 to:string="../../../../assets/icons/user.png";
   @ViewChild("textarea") textarea!: { nativeElement: { value: any; }; };
  
 constructor(private router: Router, private ap:ProduitServiceService, private apiService: ApiService)  {

  }

  ngOnInit(): void {
    this.getCategories()
  }

updateFileText(text: string) {
  this.fileText = text;

}
uploadImage(event:any) {
//   const file = event.target.files[0].name;
//  this.imageUrl=file;
//  this.to="../../../../assets/icons/"+this.imageUrl;
//  console.log(this.to);

//  const reader = new FileReader();
//   reader.onloadend = () => {
//     const imageBlob = reader.result as string;
//     console.log(imageBlob);
//   };
//   reader.readAsDataURL(file);


  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  let blob
  reader.onload = () => {
    blob = reader.result as string
    console.log(blob);
    this.imageBlob = blob
  };

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

getSelectedCategori(): Category | null{
  let cat: Category[] = this.categories.filter((c: Category) => c.nomcategorie==this.categorie.nomcategorie )

  if(cat.length!=0){
    this.categorie = cat[0]
    return this.categorie;
  }
  return null
}

addCategorieBeforContinue() {
  this.apiService.addCategorie({nomcategorie: this.categorie.nomcategorie}).subscribe(
    (response)=>{
      console.log('response categori :>> ', response);
      this.categorie = {
        idCategorie: response,
        nomcategorie: this.categorie.nomcategorie
      }
      this.addProductRequest()
    },
    (error) => {
      console.error(error)
    }
  )
}

addProduct(){

  let idCategori = this.getSelectedCategori()
  if(idCategori == null){
    this.addCategorieBeforContinue()
  } else{
    this.addProductRequest()
  }

}


addProductRequest(){
  let product = {
    "designation": this.nom,
    "prixunitaire": this.prix,
    "image": this.imageBlob,
    "quantitemax": this.quantitemax,
    "description": this.description,
    "idCategorie": this.categorie
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
