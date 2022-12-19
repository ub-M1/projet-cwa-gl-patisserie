import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from 'src/app/models/Produit';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let route: ActivatedRoute;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports: [RouterTestingModule],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);

    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product info', () => {
    expect(component.product).toBeTruthy();

    component.product = new Product({
      id: 5,
      designation: 'test',
      prixunitaire: 12,
      description: 'jdnckj',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Palmeras_de_hojaldre_1.jpg/280px-Palmeras_de_hojaldre_1.jpg',
      categorie: "je",
      quantitemax: 5
    })
    expect(component.product._id).toEqual(5);

    for (let i = 0; i < 5; i++) {
      component.addOne()
    }

    expect(component.cart.isProductInCart(component.product._id)).toBeTruthy();
    expect(component.cart.getCartItemCount(component.product._id)).toEqual(5);

    let p = fixture.nativeElement.querySelector('p');
    let pu = fixture.nativeElement.querySelector('#pu');
    let name = fixture.nativeElement.querySelector('#name');
    let img = fixture.nativeElement.querySelector('#img');
    expect(p.textContent).toContain(component.product.description);
    expect(pu.textContent).toContain(component.product.prixunitaire);
    expect(name.textContent).toContain(component.product.designation);
    expect(img.src).toContain(component.product.image);
  });
});
