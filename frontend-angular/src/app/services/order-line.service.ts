import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderLine, OrderLineAdapter } from '../models/OrderLine';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  constructor(private httpClient: HttpClient, private adapter: OrderLineAdapter) { }

  URL = 'https://api-cwa.up.railway.app/';

  getAllOrderLines(): Observable<OrderLine[]>{
    return this.httpClient.get<OrderLine[]>(`${this.URL}addLigCommande`).pipe(
      map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  };

  getOrderLinesByOrderId(orderId: number): Observable<OrderLine[]>{
    return this.httpClient.get<OrderLine[]>(`${this.URL}getligneByIdcom/${orderId}`).pipe(
      map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }
}
