import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartIcon = "../../../assets/icons/cart.png"

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
