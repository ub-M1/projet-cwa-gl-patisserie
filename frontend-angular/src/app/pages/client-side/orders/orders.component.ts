import { Component, OnInit } from '@angular/core';

import { OrderService } from 'src/app/services/order.service';
import { Order } from "../../../models/Order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  link = '/order-detail';
  userId = 1;
  ordersList: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrdersByClientId(this.userId).subscribe(
      (orders: Order[]) => {
        this.ordersList = orders
    });
  }
}
