import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {
  searchTerm = '';
  selectedProduct: any = null;
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Obtenez les données de produits à partir de votre backend ou de votre fichier de données
    this.products = [
      { id: 1, name: 'Croissant' },
      { id: 2, name: 'Pain au chocolat' },
      { id: 3, name: 'Tarte aux pommes' },
      // ...
    ];
  }
  search() {
    this.products = this.products.filter(product => product.name.includes(this.searchTerm));
  }
  
}
 /* ProductList() {
    this.products = this.products.filter(product => product.name.includes(this.searchTerm));
  }
  */
 