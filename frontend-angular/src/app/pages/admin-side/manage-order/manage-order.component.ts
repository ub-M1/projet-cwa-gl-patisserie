import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrderLineService } from '../../../services/order-line.service';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.scss']
})
export class ManageOrderComponent implements OnInit {

  orderId: number = 0;
  productsOrder: any[] = [];
  selectedOption: string | undefined;
  options: string[] = [
    "valide",
    "en cours",
    "livrée",
    "annulée"
  ];

  constructor(private orderService: OrderService, private orderLineService: OrderLineService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));

    this.orderLineService.getOrderLinesByOrderId(this.orderId).subscribe(
      (productsOrder: any[]) => {
        this.productsOrder = productsOrder;
        this.selectedOption = productsOrder[0].order.etat;
      }
    )
  }

  goBack(){
    this.location.back();
  }

  changeState(option: string){
    this.orderService.changeOrderState(this.orderId, option.toLowerCase()).subscribe(
      ()=>{
        this.selectedOption =  option;
      }
    );
  }
}
