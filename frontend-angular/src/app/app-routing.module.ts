import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/client-side/cart/cart.component';
import { HomeComponent } from './pages/client-side/home/home.component';
import { OrdersComponent } from './pages/client-side/orders/orders.component';
import { PayementComponent } from './pages/client-side/payement/payement.component';
import { ProductDetailsComponent } from './pages/client-side/product-details/product-details.component';
import { ProfileComponent } from './pages/client-side/profile/profile.component';
import { OrdersListComponent } from './pages/admin-side/orders-list/orders-list.component';
import { OrderDetailComponent } from './pages/client-side/order-detail/order-detail.component';
import { ManageOrderComponent } from './pages/admin-side/manage-order/manage-order.component';
import { AjoutProduitComponent } from './pages/admin-side/ajout-produit/ajout-produit.component';
import { ProductsListComponent } from './pages/admin-side/products-list/products-list.component';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

import { LoginPageComponent } from './pages/auth/login-page/login-page.component';


import { SignupUpPageComponent } from './pages/auth/signup-up-page/signup-up-page.component';
import { ClientsListComponent } from './pages/admin-side/clients-list/clients-list.component';
import { AuthGuardService } from './services/guard';



const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "product/:id", component: ProductDetailsComponent},
  { path: "cart", component: CartComponent},
  { path: "payement", component: PayementComponent},
  { path: "my-orders", component: OrdersComponent},

  { path: "admin/orders", component: OrdersListComponent},
  { path: "order-detail/:id", component: OrderDetailComponent},
  { path: "profile", component: ProfileComponent},
  { path: "admin", canActivateChild:[AuthGuardService], children: [
    { path: "orders", component: OrdersListComponent},
    { path: "manage-order/:id", component: ManageOrderComponent},
    { path: "liste-product", component: ProductsListComponent},
    { path: "new-product", component: AjoutProduitComponent},
    { path: "liste-clients", component: ClientsListComponent},
    ]
  },
  

  //Routes pour authentification
  { path: "login", component: LoginComponent},
  { path: "login/:redirect", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "register/:redirect", component: RegisterComponent},

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
