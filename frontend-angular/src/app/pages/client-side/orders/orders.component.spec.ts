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
      _id: 2,
      datecommande: new Date('December 12'),
      adresse_livraison: '',
      etat: true,
      client: {
        id: 1,
        nom: '',
        prenom: '',
        email: '',
        username: '',
        role:"",
        token:""
      },
      ligne_commande: {
        prixachat: 120
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
