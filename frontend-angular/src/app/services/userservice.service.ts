

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/Cart';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class UserService {

    constructor(private http: HttpClient) { 
      this.shareduser.subscribe((user) => {
        this.user = user
      })
    }

    public shareduser : BehaviorSubject<User|undefined> = new BehaviorSubject<User|undefined>(undefined);

    user: User | undefined;
  
    users:User[] = [
      {
        
        id: 1,
        nom: 'Dupont',
        prenom: 'd',
        email:'dupont@gmaail.com',
        username: 'dupont',
        role: 'admin',
        token:'mytoken1'
      },
    
      {
        id: 2,
        nom: 'Bob',
        prenom: 'b',
        email:'bob@gmaail.com',
        username: 'bob',
        role: 'client',
        token:'mytoken2'
      
      }
    ];

  URL = 'https://api-cwa.up.railway.app';


  login(username: string, password: string): Observable<any> {
    return this.http.get<any>(this.URL+'/login/'+username+'/auth/'+password);
  }


  addClient(nom:string,prenom:string,email:string,tel:string, idUser: any):Observable<any>{
    return this.http.post<any>(this.URL+'/addClient',{nom, prenom, email, tel, idUser})
  }

  createUser(username: string, password: string, role: string){
    return this.http.post<any>(this.URL+'/addUser',{username, password, role})
  }

  setUser(user: User){
    this.user = user
    console.log('this.user :>> ', this.user);
  }

  isAuth(){
    return this.user !== undefined
  }
}
    
  