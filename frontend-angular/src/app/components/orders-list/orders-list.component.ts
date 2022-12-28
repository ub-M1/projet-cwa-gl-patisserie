import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from "../../models/Order";

@Component({
  selector: 'app-order-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  providers: [OrderService]
})
export class OrderListComponent implements OnInit {

  icon = '../../../assets/icons/cutlery.png';
  @Input() ordersList: Order[];
  @Input() link: string;

  constructor() { 
    this.link = '';
    this.ordersList = [];
  }

  ngOnInit(): void {

  }
}
