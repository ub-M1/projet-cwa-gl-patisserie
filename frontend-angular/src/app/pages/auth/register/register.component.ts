import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  id!:number;
  nom :string="";
  prenom:string="";
  email :string="";
  username :string="";
  password :string="";
  role:string="";

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
  }

  login()
  {
  
  this.userService.register(this.id,this.nom,this.prenom,this.email,this.username,this.password,this.role).subscribe({
    next: data => {
        console.log("user registered with succes");
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
