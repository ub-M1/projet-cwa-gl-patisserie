import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { User } from '../../../models/User';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const mockUser: User = {
    id: 1,
    nom: 'nom',
    prenom: 'prenom',
    email:'nom@gmail.com',
    username: 'username',
    role: 'admin',
    token:'mytoken1',
    tel: "",
    idClient:0

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    component.client = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title of the component', ()=>{
    let title = fixture.nativeElement.querySelector('.client-profile__title').textContent;
    expect(title).toContain(mockUser.nom + " " + mockUser.prenom);
  });

  it('should show client information', ()=>{
    let inputTags = fixture.nativeElement.querySelectorAll('.input');
    let labelTags = fixture.nativeElement.querySelectorAll('.input > label');

    expect(inputTags.length).toBe(5);
    expect(labelTags.length).toBe(5);
  });
});
