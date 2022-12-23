import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.httpClient.get<any>(`${this.BASE_URL}/getProduit/all/all`);
  }

  getCategories() {
    return this.httpClient.get<Category[]>(`${this.BASE_URL}/getCategory`);
  }

  getProducstByCategory(cat: Category) {
    return this.httpClient.get<Category[]>(`${this.BASE_URL}/getProduit/byCategory/${cat.nomcategorie}`);
  }

  getProduct(id: any) {
    return this.httpClient.get<any>(`${this.BASE_URL}/getProduit/detail/${id}`);
  }

  postOrder(order: any) {
    return this.httpClient.post<any>(`${this.BASE_URL}/addCommande`, order);
  }

  addLigneCommande(ligneCommande: any) {
    return this.httpClient.post<any>(`${this.BASE_URL}/addLigCommande`, ligneCommande);
  }
}
