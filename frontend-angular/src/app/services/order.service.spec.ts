import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrderService } from './order.service';
import { Order } from '../models/Order';

describe('OrderService', () => {
  let service: OrderService;
  let httpMock: HttpTestingController;

  const mockOrders: Order[] = [ 
    new Order({
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
        token: ''
      }
    })
  ];
  const mockOrder: Order = new Order ({
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
      token: ''
    }
  });
  const clientId = 1;
  const orderId = 2;

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

  it('should retrieve all orders', () => {
    service.getAllOrders().subscribe(orders => {
      expect(orders.length).toBe(1);
      expect(orders).toEqual(mockOrders);
    });

    const request = httpMock.expectOne(`${service.URL}getComande/all/all`);
    expect(request.request.method).toBe('GET');
    request.flush(mockOrders);
  });

  it('should retrieve order by id', () => {
    service.getOrderById(orderId).subscribe(order => {
      expect(order).toEqual(mockOrder);
    });

    const request = httpMock.expectOne(`${service.URL}getComande/byId/${orderId}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockOrder);
  });

  it('should retrieve orders by client id', () => {
    service.getOrdersByClientId(clientId).subscribe(orders => {
      expect(orders.length).toBe(1);
      expect(orders).toEqual(mockOrders);
    });

    const request = httpMock.expectOne(`${service.URL}getComande/byIdClient/${clientId}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockOrders);
  });
});
