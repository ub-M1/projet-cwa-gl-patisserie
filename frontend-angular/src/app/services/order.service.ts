import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Order } from "../models/Order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  URL = 'https://api-cwa.up.railway.app/getCommandes';

  getAllOrders(userId: string): Observable<Order[]>{
    let params = new HttpParams().set('userId', userId);
    return this.httpClient.get<Order[]>(this.URL+'/all', {
      params
    });
  }

  getOrder(orderId: string): Observable<Order>{
    let params = new HttpParams().set('orderId', orderId);
    return this.httpClient.get<Order>(this.URL, {
      params
    });
  }
}
