import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OrderLineService } from '../../../services/order-line.service';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';
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
  total: number = 0;

  constructor(private orderService: OrderService, private orderLineService: OrderLineService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));

    this.orderLineService.getOrderLinesByOrderId(this.orderId).subscribe(
      (productsOrder: any[]) => {
        this.productsOrder = productsOrder;
        this.selectedOption = productsOrder[0].order.state;
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

  changeState(option: string){
    Swal.fire({
      title: `Etes-vous sûr de vouloir changer l'état de la commande?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Oui',
      denyButtonText: `Non`,
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.changeOrderState(this.orderId, option.toLowerCase()).subscribe(
          () => {
            this.selectedOption =  option
            Swal.fire('Enregistré!', '', 'success')
          }
        );
      }
    });
  }
}
