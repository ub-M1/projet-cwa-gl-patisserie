import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDecreaseComponent } from './add-decrease.component';

describe('AddDecreaseComponent', () => {
  let component: AddDecreaseComponent;
  let fixture: ComponentFixture<AddDecreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDecreaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDecreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
