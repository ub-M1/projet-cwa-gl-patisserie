import { Component, OnInit } from '@angular/core';

import { OrderService } from 'src/app/services/order.service';
import { Order } from "../../../models/Order";
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  userId = '1';
  ordersList: Order[] = [
    {
      _id: 2,
      datecommande: new Date('December 12'),
      adresse_livraison: '',
      etat: true,
      client: {
        id: 1,
        nom: '',
        prenom: '',
        email: '',
        username: '',
        password:'',
        role: '',
        token: ''
      },
      ligne_commande: {
        prixachat: 120
      }
    }
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders(this.userId).subscribe(
      (orders: Order[]) => {
        this.ordersList = orders
    });
  }
}
