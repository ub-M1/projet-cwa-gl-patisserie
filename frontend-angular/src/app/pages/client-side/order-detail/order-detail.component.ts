import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderLineService } from '../../../services/order-line.service';
import { OrderService } from 'src/app/services/order.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderId: number = 0;
  productsOrder: any[] = [];
  disabledButton: boolean = false;
  total: number = 0;

  constructor(private orderLineService: OrderLineService, private orderService: OrderService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));

    this.orderLineService.getOrderLinesByOrderId(this.orderId).subscribe(
      (productsOrder: any[]) => {
        this.productsOrder = productsOrder;
        console.log("aquiii", productsOrder);
        this.disabledButton = productsOrder[0].order.state === 'annulée';
        this.calculateTotal();
      }
    )
  }

  goBack(){
    this.location.back();
  }

  calculateTotal(){
    this.productsOrder.forEach((order) => {
      this.total += order.price * order.quantity;
    })
  }

  changeOrderState(){
    Swal.fire({
      title: `Etes-vous sûr de vouloir annuler la commande?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Oui',
      denyButtonText: `Non`,
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.changeOrderState(this.orderId, "annulée").subscribe(()=>{
          Swal.fire('Enregistré!', '', 'success');
          this.disabledButton = true;
        });
      }
    });
  }
}
