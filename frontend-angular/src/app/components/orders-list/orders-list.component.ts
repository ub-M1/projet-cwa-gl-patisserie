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
    this.ordersList = [
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
          role: '',
          token: ''
        },
        ligne_commande: {
          prixachat: 120
        }
      }
    ];
    this.link = '';
  }

  ngOnInit(): void {

  }

}
