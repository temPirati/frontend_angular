import { TestBed } from '@angular/core/testing';

import { ReservationUpdateService } from './reservation-update.service';

describe('ReservationUpdateService', () => {
  let service: ReservationUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
