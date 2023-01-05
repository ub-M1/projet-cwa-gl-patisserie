import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  role:string="CLIENT";
  tel: string="";

  constructor(private userService: UserService, private router: Router, private route:ActivatedRoute) { }
  ngOnInit(): void {
  }

 

  createUser(){

    this.userService.createUser(this.username,this.password,this.role).subscribe({
      next: data => {
          console.log("user registered with succes");
          this.createClient({idUser: data});
      },
      error: error => {
         
          console.error('There was an error!', error);
      }
    })
  }

  createClient(userId: any){
    this.userService.addClient(this.nom, this.prenom, this.email, this.tel, userId).subscribe({
      next: data => {
          console.log("user registered with succes", data);
          this.userService.setUser(data)
          this.gotoNextPage()
      },
      error: error => {
         
          console.error('There was an error!', error);
        this.gotoNextPage();
      }
    })
  }
  
  
  gotoNextPage(){ 
    let nextPage = this.route.snapshot.paramMap.get('redirect') || ''
    this.router.navigate(["login", nextPage]);
  }







}
