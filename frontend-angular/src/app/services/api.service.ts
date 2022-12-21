import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Produit';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public BASE_URL = "https://api-cwa.up.railway.app"

  constructor(private httpClient: HttpClient) { }

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
