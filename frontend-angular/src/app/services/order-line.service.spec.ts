import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrderLineService } from './order-line.service';
import { OrderLine } from '../models/OrderLine';

describe('OrderLineService', () => {
  let service: OrderLineService;
  let httpMock: HttpTestingController;

  const mockOrders: OrderLine[] = [
    new OrderLine({
    id: 1,
    quantity: 540,
    price: 11.5,
    order: {
      id: 1,
      date: "2022-11-14",
      address: "25 rue albert dijon",
      state: "en cours",
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
    product: {
      idProduit: 5,
      designation: "Cheese Burger",
      prixunitaire: 8.5,
      image: "img-cheese",
      quantitemax: 10,
      description: "Cheese Burger",
      idCategorie: {
        idCategorie: 2,
        nomcategorie: "BURGER"
      }
    }
  })];

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

    const request = httpMock.expectOne(`${service.URL}getligneByIdcom/${orderId}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockOrders);
  });
});
