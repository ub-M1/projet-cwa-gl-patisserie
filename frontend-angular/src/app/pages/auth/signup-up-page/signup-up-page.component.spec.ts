import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupUpPageComponent } from './signup-up-page.component';

describe('SignupUpPageComponent', () => {
  let component: SignupUpPageComponent;
  let fixture: ComponentFixture<SignupUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ SignupUpPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
