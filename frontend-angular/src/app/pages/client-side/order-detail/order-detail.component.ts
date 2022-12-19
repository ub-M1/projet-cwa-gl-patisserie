import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderId: number = 1;
  productsOrder: LigneCommande = {};

  constructor(private ligneCommandeService: LigneCommandeService) { }

  ngOnInit(): void {
    this.ligneCommandeService.getProductsByOrderId(this.orderId).subscribe(
      (productsOrder: LigneCommande[]) => {
        this.productsOrder = productsOrder
      }
    )
  }

}
