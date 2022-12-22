import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Produit';
import { ProduitServiceService } from 'src/app/services/produit-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  pro:Product[] | undefined;
  subPs!: Subscription;

  constructor(private ap:ProduitServiceService) { }

  ngOnInit(): void {
   this.subPs=this.ap.getProducts().subscribe((p:Product[])=>{
    this.pro=p;
   })
  }

}
