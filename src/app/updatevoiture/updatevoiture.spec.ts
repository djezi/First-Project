import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Updatevoiture } from './updatevoiture';

describe('Updatevoiture', () => {
  let component: Updatevoiture;
  let fixture: ComponentFixture<Updatevoiture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatevoiture],
    }).compileComponents();

    fixture = TestBed.createComponent(Updatevoiture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
