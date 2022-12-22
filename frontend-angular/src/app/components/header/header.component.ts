import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartIcon = "../../../assets/icons/cart.png"
  logoutIcon = "../../../assets/icons/user.png"

  constructor(public userService: UserService, private router: Router, public cartService: CartService) { }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout()
    this.router.navigateByUrl('login')
  }

}
