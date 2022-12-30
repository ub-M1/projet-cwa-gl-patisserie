import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from 'src/app/models/Produit';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let route: ActivatedRoute;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  
  const mockProduct: Product = {
    _id: 5,
    designation: 'test',
    prixunitaire: 12,
    description: 'jdnckj',
    image: 'image.jpg',
    categorie: "je",
    quantitemax: 5
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);

    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product info', () => {
    expect(component.product).toBeTruthy();
    expect(mockProduct._id).toEqual(5);

    for (let i = 0; i < 5; i++) {
      component.addOne()
    }

    expect(component.cart.isProductInCart(mockProduct._id)).toBeTruthy();
    expect(component.cart.getCartItemCount(mockProduct._id)).toEqual(5);

    let p = fixture.nativeElement.querySelector('p');
    let pu = fixture.nativeElement.querySelector('#pu');
    let name = fixture.nativeElement.querySelector('#name');
    let img = fixture.nativeElement.querySelector('#img');
    expect(p.textContent).toEqual(mockProduct.description);
    expect(pu.textContent).toContain(mockProduct.prixunitaire);
    expect(name.textContent).toContain(mockProduct.designation);
    expect(img.src).toContain(mockProduct.image);
  });
});
