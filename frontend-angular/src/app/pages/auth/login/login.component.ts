import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


username :string="";
password :string="";

constructor(private userService: UserService, private router: Router, private route:ActivatedRoute,) { }



  ngOnInit(): void {


  }



login()
{

this.userService.login(this.username,this.password).subscribe({
  next: user => {
      console.log("login succes");
      this.userService.setUser(user)
        this.gotoNextPage(user.role)
      
  },
  error: error => {
     
      console.error('There was an error!', error);
  }
})

}


gotoNextPage(role: string){

  if(role=="CLIENT"){
    let nextPage = this.route.snapshot.paramMap.get('redirect') || ''
    this.router.navigateByUrl(nextPage);
  } else {
    this.router.navigateByUrl('admin/orders')
  }


}



}
