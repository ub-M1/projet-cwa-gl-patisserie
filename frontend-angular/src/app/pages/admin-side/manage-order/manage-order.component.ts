import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrderLineService } from '../../../services/order-line.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.scss']
})
export class ManageOrderComponent implements OnInit {

  orderId: number = 0;
  productsOrder: any[] = [];
  selectedOption: string = 'En cours';
  options: string[] = [
    "En cours",
    "Livrée",
    "Anulée"
  ];

  constructor(private orderLineService: OrderLineService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));

    this.orderLineService.getOrderLinesByOrderId(this.orderId).subscribe(
      (productsOrder: any[]) => {
        this.productsOrder = productsOrder
      }
    )
  }

  goBack(){
    this.location.back();
  }

  changeState(option: any){
    this.selectedOption =  option;
  }

}
