import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientsListComponent } from './pages/admin-side/clients-list/clients-list.component';
import { OrdersListComponent } from './pages/admin-side/orders-list/orders-list.component';
import { ProductsListComponent } from './pages/admin-side/products-list/products-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/client-side/home/home.component';
import { CartComponent } from './pages/client-side/cart/cart.component';
import { ProductDetailsComponent } from './pages/client-side/product-details/product-details.component';
import { ProductListComponent } from './pages/client-side/product-list/product-list.component';
import { OrdersComponent } from './pages/client-side/orders/orders.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ButtonComponent } from './components/button/button.component';
import { PayementComponent } from './pages/client-side/payement/payement.component';
import { FormsModule } from '@angular/forms';
import { AddDecreaseComponent } from './components/add-decrease/add-decrease.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    ProductDetailsComponent,
    ProductListComponent,
    OrdersComponent,
    LoginComponent,
    RegisterComponent,
    ClientsListComponent,
    ProductsListComponent,
    OrdersListComponent,
    ButtonComponent,
    PayementComponent,
    AddDecreaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
