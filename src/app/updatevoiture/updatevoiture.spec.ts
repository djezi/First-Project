import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVoiture } from './updatevoiture';

describe('Updatevoiture', () => {
  let component: UpdateVoiture;
  let fixture: ComponentFixture<UpdateVoiture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateVoiture],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateVoiture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
