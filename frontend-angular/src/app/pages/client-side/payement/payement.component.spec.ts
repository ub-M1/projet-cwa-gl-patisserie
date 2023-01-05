import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/userservice.service';

import { PayementComponent } from './payement.component';

describe('PayementComponent', () => {
  let component: PayementComponent;
  let fixture: ComponentFixture<PayementComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PayementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementComponent);
    userService = TestBed.inject(UserService);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
