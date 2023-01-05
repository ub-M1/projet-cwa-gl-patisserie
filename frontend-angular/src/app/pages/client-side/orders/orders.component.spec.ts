import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { OrderService } from '../../../services/order.service';
import { OrdersComponent } from './orders.component';
import { Order } from '../../../models/Order';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let orderService: OrderService;

  const mockOrders: Order[] = [
    {
      id: 2,
      date: new Date('December 12'),
      address: '',
      state: 'En cours',
      idClient: {
        id: 1,
        nom: '',
        prenom: '',
        email: '',
        username: '',
        role: '',
        token: '',
        tel: "",
        idClient:0

      }
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ OrdersComponent ],
      providers: [OrderService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    orderService = TestBed.inject(OrderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get orders from service', (done) => {
    const clientId = 1;
    const getAllOrdersSpy = spyOn(orderService, 'getOrdersByClientId')
      .and.returnValue(of(mockOrders));
    fixture.detectChanges();

    orderService.getOrdersByClientId(clientId).subscribe(()=>{
      expect(getAllOrdersSpy).toHaveBeenCalled();
      done();
    });
  });
});
