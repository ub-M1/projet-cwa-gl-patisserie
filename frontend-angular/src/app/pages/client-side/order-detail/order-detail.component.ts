import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderLineService } from '../../../services/order-line.service';
import { OrderService } from 'src/app/services/order.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderId: number = 0;
  productsOrder: any[] = [];

  constructor(private orderLineService: OrderLineService, private orderService: OrderService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));

    this.orderLineService.getOrderLinesByOrderId(this.orderId).subscribe(
      (productsOrder: any[]) => {
        this.productsOrder = productsOrder
        console.log(productsOrder)
      }
    )
  }

  goBack(){
    this.location.back();
  }

  changeOrderState(){
    this.orderService.changeOrderState(this.orderId, "anulée").subscribe();
  }

}
