import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AjoutProduitComponent } from './ajout-produit.component';

describe('AjoutProduitComponent', () => {
  let component: AjoutProduitComponent;
  let fixture: ComponentFixture<AjoutProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ AjoutProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
