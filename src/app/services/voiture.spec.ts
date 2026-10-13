import { TestBed } from '@angular/core/testing';
import { Voitureservice } from './voiture';

describe('Voiture', () => {
  let service: Voitureservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Voitureservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
