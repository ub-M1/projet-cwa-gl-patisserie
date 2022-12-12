import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  icon = '../../../assets/icons/cutlery.png';
  listeCommandes = [
    {
      id: 2,
      date: '01/02/2023',
      prix: 20
    },
    {
      id: 3,
      date: '10/02/2023',
      prix: 100
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getCommandes(){}

}
