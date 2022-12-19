import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


username :string="";
password :string="";

constructor(private userService: UserService, private router: Router) { }



  ngOnInit(): void {


  }



login()
{

this.userService.login(this.username,this.password).subscribe({
  next: data => {
      console.log("login succes");
      this.gotoNextPage();
  },
  error: error => {
     
      console.error('There was an error!', error);
    this.gotoNextPage();
  }
})

}


gotoNextPage(){ 

  this.router.navigateByUrl('');
}



}
