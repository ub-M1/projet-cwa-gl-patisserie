

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

    constructor(private http: HttpClient) { }
  
    users:User[] = [
      {
        
        id: 1,
        nom: 'Dupont',
        prenom: 'd',
        email:'dupont@gmaail.com',
        username: 'dupont',
        password:'testdupont',
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
        password:'testbob',
        token:'mytoken2'
      
      }
    ];


  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('/api/login', { username, password });
  }


  register(id:number,nom:string,prenom:string,email:string,username:string,role:string,password:string):Observable<any>{
    return this.http.post<any>('/api/register',{id,nom,prenom,email,username,role,password})
  }
}
    
  