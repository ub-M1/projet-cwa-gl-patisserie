import { Component, OnInit } from '@angular/core';
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
  ordersList: Order[] = [
    {
      _id: '2',
      datecommande: new Date('December 12'),
      adresse_livraison: '',
      etat: true,
      client: {
        id: 1,
        nom: '',
        prenom: '',
        email: '',
        username: ''
      },
      ligne_commande: {
        prixachat: 120
      }
    },
    {
      _id: '3',
      datecommande: new Date('December 1'),
      adresse_livraison: '',
      etat: true,
      client: {
        id: 1,
        nom: '',
        prenom: '',
        email: '',
        username: ''
      },
      ligne_commande: {
        prixachat: 120
      }
    }
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      (orders: Order[]) => {
        this.ordersList = orders
      });
  }

  getCommandes(){}

}
