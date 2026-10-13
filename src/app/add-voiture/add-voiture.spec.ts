import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddVoiture } from './add-voiture';

describe('AddVoiture', () => {
  let component: AddVoiture;
  let fixture: ComponentFixture<AddVoiture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVoiture],
    }).compileComponents();

    fixture = TestBed.createComponent(AddVoiture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
