import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrderDetailComponent } from './order-detail.component';
import { OrderLineService } from '../../../services/order-line.service';
import { RouterTestingModule } from '@angular/router/testing';
import { mockOrders } from './mockOrders';

describe('OrderDetailComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ OrderDetailComponent ],
      providers: [OrderLineService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailComponent);
    component = fixture.componentInstance;
    component.productsOrder = mockOrders;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show detail header', ()=>{
    let header = fixture.nativeElement.querySelector('.detail-header');
    expect(header).not.toBeNull();
    let h1Tags = fixture.nativeElement.querySelectorAll('.detail-header > h1');
    expect(h1Tags.length).toBe(2);
  });

  it('should show order detail information', ()=>{
    let info = fixture.nativeElement.querySelector('.detail-info');
    expect(info).not.toBeNull();
    let img = fixture.nativeElement.querySelectorAll('.detail-info > img');
    expect(img.length).toBe(1);
    let pTags = fixture.nativeElement.querySelectorAll('.detail-info > p');
    expect(pTags.length).toBe(2);
    let pTagsMain = fixture.nativeElement.querySelectorAll('.detail-info__main > p');
    expect(pTagsMain.length).toBe(2);
  });

  it('should show actions', ()=>{
    let actions = fixture.nativeElement.querySelector('.detail-actions');
    expect(actions).not.toBeNull();
    let buttons = fixture.nativeElement.querySelectorAll('.detail-actions > button');
    expect(buttons.length).toBe(2);
  });
});
