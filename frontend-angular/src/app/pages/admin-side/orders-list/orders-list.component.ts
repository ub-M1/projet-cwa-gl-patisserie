import { Component, OnInit } from '@angular/core';

import { OrderService } from 'src/app/services/order.service';
import { Order } from "../../../models/Order";
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  link = '/admin/manage-order';
  userId = 1;
  ordersList: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      (orders: Order[]) => {
        this.ordersList = orders
    });
  }
}
