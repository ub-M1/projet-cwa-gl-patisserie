import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Produit';
import { ProduitServiceService } from 'src/app/services/produit-service.service';

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
 to:string="../../../../assets/icons/user.png";
   @ViewChild("textarea") textarea!: { nativeElement: { value: any; }; };
  
 constructor(private ap:ProduitServiceService)  {

  }

  ngOnInit(): void {
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




}
