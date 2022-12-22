import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { UtilisateurSService } from 'src/app/services/UtilisateurService/utilisateur-s.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  ListU!:User[];
  subPs!:Subscription;
  constructor(private User:UtilisateurSService) {

   }

  ngOnInit(): void {
    console.log(this.User.User);
    this.subPs=this.User.User.subscribe((p:User[])=>{
      this.ListU=p;

    });
    /*
    this.ListU=[
      {
        id: 1021,
        nom: "ZOUBIR",
        prenom: "Amina",
        email: "zoubir@gmail.com",
        username: "amina123",
        tel:712345678,
      },
      {
        id: 1021,
        nom: "trinite",
        prenom: "mombouli",
        email: "trinite@gmail.com",
        username: "tm123",
        tel:712345678,
      }
    ]*/
  }

}
