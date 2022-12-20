import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrderLineService } from './order-line.service';
import { mockOrders } from '../pages/client-side/order-detail/mockOrders';

describe('OrderLineService', () => {
  let service: OrderLineService;
  let httpMock: HttpTestingController;

  afterEach(() => {
    httpMock.verify();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderLineService]
    });
    service = TestBed.inject(OrderLineService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all orders lines', () => {    
    service.getAllOrderLines().subscribe(orders => {
      expect(orders.length).toBe(1);
      expect(orders).toEqual(mockOrders);
    });

    const request = httpMock.expectOne(`${service.URL}addLigCommande`);
    expect(request.request.method).toBe('GET');
    request.flush(mockOrders);
  });

  it('should retrieve orders lines by order id', () => {    
    const orderId = 1;
    service.getOrderLinesByOrderId(orderId).subscribe(orders => {
      expect(orders.length).toBe(1);
      expect(orders).toEqual(mockOrders);
    });

    const request = httpMock.expectOne(`${service.URL}addLigCommande/${orderId}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockOrders);
  });
});
