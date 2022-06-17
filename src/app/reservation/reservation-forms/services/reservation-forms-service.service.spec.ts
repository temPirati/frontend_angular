import { TestBed } from '@angular/core/testing';

import { ReservationFormsService } from './reservation-forms-service';

describe('ReservationFormsService', () => {
  let service: ReservationFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
