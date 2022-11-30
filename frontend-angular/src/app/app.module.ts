import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './client_side/home/home.component';
import { CartComponent } from './client_side/cart/cart.component';
import { ProductDetailsComponent } from './client_side/product-details/product-details.component';
import { ProductListComponent } from './client_side/product-list/product-list.component';
import { OrdersComponent } from './client_side/orders/orders.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClientsListComponent } from './admin/clients-list/clients-list.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { OrdersListComponent } from './admin/orders-list/orders-list.component';

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
    OrdersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
