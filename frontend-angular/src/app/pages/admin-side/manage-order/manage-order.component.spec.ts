import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderLineService } from '../../../services/order-line.service';
import { RouterTestingModule } from '@angular/router/testing';

import { ManageOrderComponent } from './manage-order.component';
import { mockOrders } from './mockOrders';

describe('ManageOrderComponent', () => {
  let component: ManageOrderComponent;
  let fixture: ComponentFixture<ManageOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ ManageOrderComponent ],
      providers: [OrderLineService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageOrderComponent);
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

  it('should show detail user', ()=>{
    let userInfo = fixture.nativeElement.querySelector('.detail-user');
    expect(userInfo).not.toBeNull();
    let pTags = fixture.nativeElement.querySelectorAll('.detail-user > p');
    expect(pTags.length).toBe(4);
  });

  it('should show actions', ()=>{
    let actions = fixture.nativeElement.querySelector('.detail-actions');
    expect(actions).not.toBeNull();
    let buttons = fixture.nativeElement.querySelectorAll('.detail-actions > button');
    expect(buttons.length).toBe(1);
  });

  it('should change state', fakeAsync(() => {
    spyOn(component, 'changeState');
    let button = fixture.nativeElement.querySelector('.detail-actions__change-state');
    button.click();
    tick();
	  expect(component.changeState).toHaveBeenCalled();
  }));
});
