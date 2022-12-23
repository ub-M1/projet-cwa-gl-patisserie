import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/client-side/cart/cart.component';
import { HomeComponent } from './pages/client-side/home/home.component';
import { OrdersComponent } from './pages/client-side/orders/orders.component';
import { PayementComponent } from './pages/client-side/payement/payement.component';
import { ProductDetailsComponent } from './pages/client-side/product-details/product-details.component';
import { OrdersListComponent } from './pages/admin-side/orders-list/orders-list.component';
import { AjoutProduitComponent } from './pages/admin-side/ajout-produit/ajout-produit.component';
import { ProductListComponent } from './pages/client-side/product-list/product-list.component';
import { ProductsListComponent } from './pages/admin-side/products-list/products-list.component';

const routes: Routes = [
  { path: "admin/liste-product", component: ProductsListComponent},
  { path: "admin/new-product", component: AjoutProduitComponent},
  { path: "", component: HomeComponent},
  { path: "product/:id", component: ProductDetailsComponent},
  { path: "cart", component: CartComponent},
  { path: "payement", component: PayementComponent},
  { path: "my-orders", component: OrdersComponent},
  { path: "admin/orders", component: OrdersListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
