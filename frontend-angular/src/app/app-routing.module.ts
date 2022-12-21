import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/client-side/cart/cart.component';
import { HomeComponent } from './pages/client-side/home/home.component';
import { OrdersComponent } from './pages/client-side/orders/orders.component';
import { PayementComponent } from './pages/client-side/payement/payement.component';
import { ProductDetailsComponent } from './pages/client-side/product-details/product-details.component';
import { ProfileComponent } from './pages/client-side/profile/profile.component';
import { OrdersListComponent } from './pages/admin-side/orders-list/orders-list.component';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

import { LoginPageComponent } from './pages/auth/login-page/login-page.component';


import { SignupUpPageComponent } from './pages/auth/signup-up-page/signup-up-page.component';






const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "product/:id", component: ProductDetailsComponent},
  { path: "cart", component: CartComponent},
  { path: "payement", component: PayementComponent},
  { path: "my-orders", component: OrdersComponent},
  { path: "admin/orders", component: OrdersListComponent},
  
  //Routes pour authentification
  
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  
  { path: "profile", component: ProfileComponent},


//Routes pour authentification nouvelle version


{path:"login2", component:LoginPageComponent},
{path:"signup2", component:SignupUpPageComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
