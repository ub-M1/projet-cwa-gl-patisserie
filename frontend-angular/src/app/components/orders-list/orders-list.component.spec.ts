import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrderService } from '../../services/order.service';
import { OrderListComponent } from './orders-list.component';
import { Order } from '../../models/Order';

describe('OrdersListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

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
        tel: '',
        idClient:0
      },
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ OrderListComponent ],
      providers: [OrderService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    component.ordersList = mockOrders;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title of the component', ()=>{
    let title = fixture.nativeElement.querySelector('.list-commandes__title');
    expect(title.textContent).toContain('Commandes');
  })

  it('should show card with information', ()=>{
    let card = fixture.nativeElement.querySelector('.card-information');
    expect(card).not.toBeNull();
  })

  it('should show card information', ()=>{
    let id = fixture.nativeElement.querySelector('.card-information__id').textContent;
    let date = fixture.nativeElement.querySelector('.card-information__date').textContent;
    let state = fixture.nativeElement.querySelector('.card-information__state').textContent;

    expect(id).toContain('Commande #'+mockOrders[0].id);
    expect(date).toContain(mockOrders[0].date);
    expect(state).toContain(mockOrders[0].state);
  })

  it('should show chevron', ()=>{
    let chevron = fixture.nativeElement.querySelector('img');
    expect(chevron).not.toBeNull();
  })
});
