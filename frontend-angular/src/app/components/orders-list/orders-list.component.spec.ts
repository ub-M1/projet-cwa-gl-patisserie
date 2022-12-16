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
      declarations: [ OrderListComponent ],
      providers: [OrderService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
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
    let price = fixture.nativeElement.querySelector('.card-information__price').textContent;

    expect(id).toContain('Commande #'+mockOrders[0]._id);
    expect(date).toContain(mockOrders[0].datecommande);
    expect(price).toContain(mockOrders[0].ligne_commande.prixachat);
  })

  it('should show chevron', ()=>{
    let chevron = fixture.nativeElement.querySelector('img');
    expect(chevron).not.toBeNull();
  })
});
