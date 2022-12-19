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
      idCommande: 2,
      datecommande: new Date('December 12'),
      adresseLivraison: '',
      etat: true,
      idClient: {
        id: 1,
        nom: '',
        prenom: '',
        email: '',
        username: '',
        role: '',
        token: ''
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
    const getAllOrdersSpy = spyOn(orderService, 'getAllOrders')
      .and.returnValue(of(mockOrders));
    fixture.detectChanges();

    orderService.getAllOrders().subscribe(()=>{
      expect(getAllOrdersSpy).toHaveBeenCalled();
      done();
    });
  });
});
