import { TestBed } from '@angular/core/testing';
import { Product } from '../models/Produit';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    localStorage.clear()
    service.clear()
  });

  afterEach(() => {
    service.clear();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init cart as empty', () => {
    expect(service.cart.value.cart_item.length).toEqual(0);
    expect(service.cart.value.getCount()).toEqual(0);
    expect(service.cart.value.getTotalPrice()).toEqual(0);
  });


  it('should add new product', () => {
    let p = new Product({
      id:1,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'http://sqjcndkj.png',
      categorie: "je"
    });
    service.add(p);

    expect(service.cart.value.cart_item.length).toEqual(1);
    expect(service.cart.value.getCount()).toEqual(1);
    expect(service.cart.value.getTotalPrice()).toEqual(12);
    expect(service.cart.value.getCartItem(p._id)?.quantite).toEqual(1);


    service.add(p)
    expect(service.cart.value.cart_item.length).toEqual(1);
    expect(service.cart.value.getCount()).toEqual(1);
    expect(service.cart.value.getTotalPrice()).toEqual(24);
    expect(service.cart.value.getCartItem(p._id)?.quantite).toEqual(2);

  });

  it('should add new product with quantity', () => {
    let p = new Product({
      id:1,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'http://sqjcndkj.png',
      categorie: "je",
      quantitemax: 50
    });
    service.addMany(p, 10);

    expect(service.cart.value.cart_item.length).toEqual(1);
    expect(service.cart.value.getCount()).toEqual(1);
    expect(service.cart.value.getTotalPrice()).toEqual(120);
    expect(service.cart.value.getCartItem(p._id)?.quantite).toEqual(10);

  });

  it('should add new different product ', () => {
    let p1 = new Product({
      id:1,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'http://sqjcndkj.png',
      categorie: "je"
    });

    let p2 = new Product({
      id:2,
      designation: 'tessst',
      prixunitaire: 10,
      description: 'jdnckj',
      image: 'http://sqjcndkj.png',
      categorie: "je"
    });

    service.add(p1);
    service.add(p2);
    service.add(p2);

    expect(service.cart.value.cart_item.length).toEqual(2);
    expect(service.cart.value.getCount()).toEqual(2);
    expect(service.cart.value.getTotalPrice()).toEqual(32);
    expect(service.cart.value.getCartItem(p1._id)?.quantite).toEqual(1);
    expect(service.cart.value.getCartItem(p2._id)?.quantite).toEqual(2);
 
  });


  it('should decrease product ', () => {
    let p1 = new Product({
      id:1,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'http://sqjcndkj.png',
      categorie: "je"
    });

    let p2 = new Product({
      id:2,
      designation: 'tessst',
      prixunitaire: 10,
      description: 'jdnckj',
      image: 'http://sqjcndkj.png',
      categorie: "je"
    });

    service.add(p2);
    service.add(p1);
    service.add(p2);

    service.decrease(p2);

    expect(service.cart.value.cart_item.length).toEqual(2);
    expect(service.cart.value.getCount()).toEqual(2);
    expect(service.cart.value.getTotalPrice()).toEqual(22);
    expect(service.cart.value.getCartItem(p1._id)?.quantite).toEqual(1);
    expect(service.cart.value.getCartItem(p2._id)?.quantite).toEqual(1);

    service.decrease(p2);
    service.update();

    expect(service.cart.value.cart_item.length).toEqual(1);
    expect(service.cart.value.getCount()).toEqual(1);
    expect(service.cart.value.getTotalPrice()).toEqual(12);
    expect(service.cart.value.getCartItem(p1._id)?.quantite).toEqual(1);
    expect(service.cart.value.getCartItem(p2._id)).toBeFalsy();

  });


  it('should clear the cart ', () => {
    let p1 = new Product({
      id:1,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'http://sqjcndkj.png',
      categorie: "je"
    });

    let p2 = new Product({
      id:2,
      designation: 'tessst',
      prixunitaire: 10,
      description: 'jdnckj',
      image: 'http://sqjcndkj.png',
      categorie: "je"
    });

    service.add(p2);
    service.add(p1);
    service.add(p2);

    service.clear();

    expect(service.cart.value.cart_item.length).toEqual(0);
    expect(service.cart.value.getCount()).toEqual(0);
    expect(service.cart.value.getTotalPrice()).toEqual(0);
    expect(service.cart.value.getCartItem(p1._id)?.quantite).toBeFalsy;
    expect(service.cart.value.getCartItem(p2._id)?.quantite).toBeFalsy;

  });

});
