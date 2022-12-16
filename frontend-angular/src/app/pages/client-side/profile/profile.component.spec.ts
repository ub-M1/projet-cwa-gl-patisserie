import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { User } from '../../../models/User';

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
    token:'mytoken1'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title of the component', ()=>{
    let title = fixture.nativeElement.querySelector('.client-profile__title').textContent;
    expect(title).toContain(mockUser.prenom+" "+mockUser.nom);
  });

  it('should show client information', ()=>{
    let pTags = fixture.nativeElement.querySelectorAll('p');
    let h2Tags = fixture.nativeElement.querySelectorAll('h2');

    expect(pTags.length).toBe(3);
    expect(h2Tags.length).toBe(3);
  });

  it('should show button', ()=>{
    let button = fixture.nativeElement.querySelector('button');
    expect(button).not.toBeNull();
    expect(button.textContent).toContain('Modifier');
  })
});
