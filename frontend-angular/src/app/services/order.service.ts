import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from "../models/Order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  URL = 'https://api-cwa.up.railway.app/';

  getAllOrders(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.URL}getComande/all/all`);
  }

  getOrderById(orderId: number): Observable<Order>{
    return this.httpClient.get<Order>(`${this.URL}getComande/byId/${orderId}`);
  }

  getOrdersByClientId(clientId: number): Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.URL}getComande/byIdClient/${clientId}`);
  }
}
