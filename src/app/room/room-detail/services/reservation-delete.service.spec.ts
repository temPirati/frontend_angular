import { TestBed } from '@angular/core/testing';

import { ReservationDeleteService } from './reservation-delete.service';

describe('ReservationDeleteService', () => {
  let service: ReservationDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
