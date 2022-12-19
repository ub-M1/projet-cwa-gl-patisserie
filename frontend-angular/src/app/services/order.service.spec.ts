import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrderService } from './order.service';
import { Order } from '../models/Order';

describe('OrderService', () => {
  let service: OrderService;
  let httpMock: HttpTestingController;

  afterEach(() => {
    httpMock.verify();
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService]
    });
    service = TestBed.inject(OrderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve orders', () => {
    const mockOrders: Order[] = [{
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
    }];
    const userId = '1';
    
    service.getAllOrders(userId).subscribe(orders => {
      expect(orders.length).toBe(1);
      expect(orders).toEqual(mockOrders);
    });

    const request = httpMock.expectOne(`${service.URL}/all?userId=${userId}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockOrders);
  });
});
