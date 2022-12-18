import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { OrdersListComponent } from './orders-list.component';
import { Order } from '../../../models/Order';
import { OrderService } from '../../../services/order.service';

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;
  let orderService: OrderService;

  const mockOrders: Order[] = [
    {
      _id: '2',
      datecommande: new Date('December 12'),
      adresse_livraison: '',
      etat: true,
      client: {
        id: 1,
        nom: '',
        prenom: '',
        email: '',
        username: ''
      },
      ligne_commande: {
        prixachat: 120
      }
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ OrdersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    orderService = TestBed.inject(OrderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get orders from service', (done) => {
    const userId = '1';
    const getAllOrdersSpy = spyOn(orderService, 'getAllOrders')
      .and.returnValue(of(mockOrders));
    fixture.detectChanges();

    orderService.getAllOrders(userId).subscribe(()=>{
      expect(getAllOrdersSpy).toHaveBeenCalled();
      done();
    });
  });
});
