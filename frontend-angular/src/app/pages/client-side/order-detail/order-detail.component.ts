import { Component, OnInit } from '@angular/core';
import { OrderLineService } from 'src/app/services/order-line.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderId: number = 1;
  productsOrder: any[] = [];

  constructor(private orderLineService: OrderLineService) { }

  ngOnInit(): void {
    this.orderLineService.getOrderLinesByOrderId(this.orderId).subscribe(
      (productsOrder: any[]) => {
        this.productsOrder = productsOrder
      }
    )
  }

}
