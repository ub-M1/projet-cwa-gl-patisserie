

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/Cart';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })

  export class UserService {

    constructor(private http: HttpClient) { 

      this.shareduser.subscribe((user) => {
        this.user = user
      })

      console.log("user service constructr");
      let u = localStorage.getItem('user')
      if (u){
        this.user = JSON.parse(u)
        
      }



      this.sharedclient.subscribe((c) => {
        this.client = c
      })

      if(this.user?.role == "ADMIN"){
        this.client = this.user
      } else{
        let c = localStorage.getItem('client')
        if (c){
          this.client = JSON.parse(c)
          
        }
      }

      
      
    }

    public shareduser : BehaviorSubject<User|undefined> = new BehaviorSubject<User|undefined>(undefined);
    public sharedclient : BehaviorSubject<User|undefined> = new BehaviorSubject<User|undefined>(undefined);

    user: User | undefined;
    client: User | undefined;

    public afterLoginPage  = ""
  

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

  getClients(): Observable<any> {
    return this.http.get<any>(this.URL+'/getClient/');
  }

  setUser(user: any){
    this.user = user
    // this.user!.id = user.userId

    localStorage.setItem('user', JSON.stringify(this.user))
    console.log('this.user :>> ', this.user);
  }

  setCLient(client: any){
    this.client = client
    // admin n'a pa des de client
    if(client){
      this.client!.id = client.idClient
      localStorage.setItem('client', JSON.stringify(this.client))
      console.log('this.client :>> ', this.client);
    }
    
  }

  isAuth(){
    return this.user !== undefined
  }

  isAdmin(){
    if(this.user) {
      if(this.user.role == "ADMIN") {
        return true
      }
    }
    return false
  }

  logout(){
    this.user = undefined;
    localStorage.clear()
  }

  getClient(idUser: any){
    return this.http.get<any>(this.URL+'/getClientByUser/'+idUser);
  }

  getUser(){

  }
}
    
  