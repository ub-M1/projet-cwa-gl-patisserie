import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservice.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  icon = '../../../assets/icons/user.png';
  client: User | undefined;
  user: User | undefined;

  constructor(private userService: UserService) {
    this.client = this.userService.client
    this.user = this.userService.user
    console.log('this.client :>> ', this.client);
   }

  ngOnInit(): void {

  }

}
