import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  icon = '../../../assets/icons/user.png';
  client: User = {
    id: 1,
    nom: 'nom',
    prenom: 'prenom',
    email:'nom@gmail.com',
    username: 'username',
    role: 'admin',
    token:'mytoken1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
