import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  Produit!: Product[];
  ListeProduit:BehaviorSubject<Product[]>=new BehaviorSubject(this.Produit);
  currentData = this.ListeProduit.asObservable();
 
  constructor(private http:HttpClient) {
   
   }
     changeData(data:any) {
    this.ListeProduit.next(data);
    }
    getProducts(){ this.http
      .get<Product>("https://api-cwa.up.railway.app/getProduit/all/")
      .subscribe(data => {
           this.changeData(data);
      });
      return this.ListeProduit;

    }
    AjoutProduit(p:Product){
      console.log(p);
      /*this.http
      .post<Product>('https://api-cwa.up.railway.app/addProduit',p)
      .subscribe(data => {
        this.changeData(data);
      });*/
    }
    getProd(id: number) {
    //  console.log(this.http.get<Produit>(`http://localhost:3000/produits${id}`));
      return this.http.get<Product>(`https://api-cwa.up.railway.app/getProduit/all/${id}`);
    }
    
    SupprimerProduit(i:number){
      this.http.delete(`https://api-cwa.up.railway.app/getProduit/all/${i}`).subscribe(response => {

  });
    }

}
