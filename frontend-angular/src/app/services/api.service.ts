import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Category } from '../models/Category';
import { Product } from '../models/Produit';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public BASE_URL = "https://api-cwa.up.railway.app"

  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(private httpClient: HttpClient) { }

  getProductsList() {
    return this.httpClient.get<any>(`${this.BASE_URL}/getProduit/all/all`).pipe(
      map((data: any[]) => data.map((item) => {
        let p: Product = new Product(item)
            if(!p.image?.includes('base64') && !p.image?.includes('http')){
              p.image = "assets/img/"+p.image
            }
            return p;
      }))
    );
  }

  getCategories() {
    return this.httpClient.get<Category[]>(`${this.BASE_URL}/getCategory`);
  }

  getProducstByCategory(cat: Category) {
    return this.httpClient.get<Product[]>(`${this.BASE_URL}/getProduit/byCategory/${cat.nomcategorie}`).pipe(
      map((data: any[]) => data.map((item) => {
        let p: Product = new Product(item)
            if(!p.image?.includes('http') && !p.image?.includes('data:image')){
              p.image = "assets/img/"+p.image
            }
            return p;
      }))
    );
  }

  getProduct(id: any) {
    return this.httpClient.get<any>(`${this.BASE_URL}/getProduit/detail/${id}`).pipe(
      map((data: any[]) => data.map((item) => {
        let p: Product = new Product(item)
            if(!p.image?.includes('http') && !p.image?.includes('data:image')){
              p.image = "assets/img/"+p.image
            }
            return p;
      }))
    );;
  }

  deleteProduct(id: any) {
    return this.httpClient.delete<any>(`${this.BASE_URL}/deleteProduit/${id}`);
  }

  postOrder(order: any) {
    return this.httpClient.post<any>(`${this.BASE_URL}/addCommande`, order);
  }

  addLigneCommande(ligneCommande: any) {
    return this.httpClient.post<any>(`${this.BASE_URL}/addLigCommande`, ligneCommande);
  }

  addProduct(product: any){
    return this.httpClient.post<any>(`${this.BASE_URL}/addProduit`, product);
  }

  addCategorie(categorie: any){
    return this.httpClient.post<any>(`${this.BASE_URL}/addCategory`, categorie);
  }
}
