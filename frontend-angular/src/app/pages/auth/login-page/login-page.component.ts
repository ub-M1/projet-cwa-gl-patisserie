import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { ReactiveFormsModule } from '@angular/forms';

import {  FormControl } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
   this.loginForm = this.formbuilder.group({
      username: [''],
      password: ['', Validators.required]
    })
  }
  login(){
    this.http.get<any>(`https://api-cwa.up.railway.app/login/${this.loginForm.value.username}/auth/${this.loginForm.value.password}`)
    .subscribe(res=>{
      this.router.navigateByUrl('')
    },err=>{
      alert("Something went wrong")
    })
  }
}

