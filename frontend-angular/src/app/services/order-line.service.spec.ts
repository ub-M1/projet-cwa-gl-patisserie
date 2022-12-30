import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrderLineService } from './order-line.service';
import { OrderLine } from '../models/OrderLine';
import { Order } from '../models/Order';

describe('OrderLineService', () => {
  let service: OrderLineService;
  let httpMock: HttpTestingController;

  const mockOrders: OrderLine[] = [
    new OrderLine({
      id: 1,
      quantity: 540,
      price: 11.5,
      idCommande: new Order({
        idCommande: 1,
        datecommande: new Date("2022-11-14"),
        adresseLivraison: "25 rue albert dijon",
        etat: "en cours",
        idClient: {
          id: 1,
          nom: '',
          prenom: '',
          email: '',
          username: '',
          role: '',
          token: '',
          tel: ''
        }
      }),
      idProduit: {
        id: 5,
        designation: "Cheese Burger",
        prixunitaire: 8.5,
        image: 'img-cheese.jpg',
        quantitemax: 10,
        description: "Cheese Burger",
        categorie: ''
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

  it('should retrieve orders lines by order id', () => {    
    const orderId = 1;
    service.getOrderLinesByOrderId(orderId).subscribe(orders => {
      expect(orders.length).toBe(1);
      expect(orders).toEqual(mockOrders);
    });

    const request = httpMock.expectOne(`${service.URL}getligneByIdcom/${orderId}`);
    expect(request.request.method).toBe('GET');
    // request.flush(mockOrders);
  });
});
