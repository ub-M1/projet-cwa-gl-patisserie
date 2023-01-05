import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/services/userservice.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should display the login form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.form')).toBeTruthy();
    expect(compiled.querySelector('input[name=username]')).toBeTruthy();
    expect(compiled.querySelector('input[name=password]')).toBeTruthy();
    expect(compiled.querySelector('#btnRegister')).toBeTruthy();
    expect(compiled.querySelector('#btnlogin')).toBeTruthy();

    
  });

  it('should call login onlogin clicked', () => {
    spyOn(component, 'login');
    const compiled = fixture.debugElement.nativeElement;
    let btn = compiled.querySelector('#btnlogin')
    btn.click();

    expect(component.login).toHaveBeenCalled();

    
  });

  it('should call login register clicked', () => {
    spyOn(component, 'register');
    const compiled = fixture.debugElement.nativeElement;
    let btn = compiled.querySelector('#btnRegister')
    btn.click();

    expect(component.register).toHaveBeenCalled();

    
  });

});
