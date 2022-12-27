import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  userList!:User[];
  subPs!:Subscription;
  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
    this.subPs=this.userService.getClients().subscribe((p:User[])=>{
      this.userList=p;
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
