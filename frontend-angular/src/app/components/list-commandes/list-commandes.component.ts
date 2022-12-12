import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.component.html',
  styleUrls: ['./list-commandes.component.scss']
})
export class ListCommandesComponent implements OnInit {

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
