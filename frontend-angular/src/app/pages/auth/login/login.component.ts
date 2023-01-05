import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2'



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
      this.getClient(user)
      
  },
  error: error => {
     
      console.error('There was an error!', error);

      Swal.fire({
        title: 'Echec',
        text: "Le nom d'utilisateur ou le mot de passe n'est pas correcte. Vous pouvez créer un compte si vous n'en n'avez pas!",
        icon: 'error',
        confirmButtonText: 'Ok'
      })
  }
})

}


getClient(user: any)
{

this.userService.getClient(user.idUser).subscribe({
  next: client => {
    if(!this.userService.isAdmin()){
      this.userService.setCLient(client[0])
    }
    this.gotoNextPage(user.role)
      
  },
  error: error => {
     
      console.error('There was an error!', error);

      Swal.fire({
        title: 'Echec',
        text: "Aucun client trouvé",
        icon: 'error',
        confirmButtonText: 'Ok'
      })
  }
})

}


gotoNextPage(role: string){

  if(role=="CLIENT"){
    let nextPage = this.userService.afterLoginPage || this.route.snapshot.paramMap.get('redirect') || ''
    this.userService.afterLoginPage = ""
    this.router.navigateByUrl(nextPage);
  } else {
    this.router.navigateByUrl('admin/orders')
  }
  


}

register(){
  this.router.navigateByUrl("register");
}



}
