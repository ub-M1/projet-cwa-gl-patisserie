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

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "product/:id", component: ProductDetailsComponent},
  { path: "cart", component: CartComponent},
  { path: "payement", component: PayementComponent},
  { path: "my-orders", component: OrdersComponent},
<<<<<<< HEAD
  { path: "admin/orders", component: OrdersListComponent},
  
  //Routes pouyr authentification
  
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  
  

=======
  { path: "profile", component: ProfileComponent},
  { path: "admin/orders", component: OrdersListComponent}
>>>>>>> b0cac6fb8c817a01e58311a6dc0f6c56cbd937ef
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
