import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  constructor(private httpClient: HttpClient) { }

  URL = 'https://api-cwa.up.railway.app/';

  getAllOrderLines(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.URL}addLigCommande`);
  };

  getOrderLinesByOrderId(orderId: number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.URL}addLigCommande/${orderId}`);
  }
}
