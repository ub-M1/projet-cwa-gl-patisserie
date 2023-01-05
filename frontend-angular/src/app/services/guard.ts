import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { UserService } from './userservice.service';

@Injectable()
export class AuthGuardService implements CanActivateChild {

  constructor(private userService: UserService, private router: Router) {}
  
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}

