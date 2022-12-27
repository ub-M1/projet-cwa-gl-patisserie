import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order, OrderAdapter } from "../models/Order";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient, private adapter: OrderAdapter) { }

  URL = 'https://api-cwa.up.railway.app/';

  getAllOrders(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.URL}getComande/all/all`).pipe(
      map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }

  getOrderById(orderId: number): Observable<Order>{
    return this.httpClient.get<Order>(`${this.URL}getComande/byId/${orderId}`).pipe(
      map((data: any) => this.adapter.adapt(data))
    );
  }

  getOrdersByClientId(clientId: number): Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.URL}getComande/byIdClient/${clientId}`).pipe(
      map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }

  changeOrderState(orderId: number, state: string): Observable<Order>{
    return this.httpClient.post<Order>(`${this.URL}updateEtatCommande/${orderId}`,
    {
      etat: state
    });
  }
}
