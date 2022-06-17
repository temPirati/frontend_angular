import { TestBed } from '@angular/core/testing';

import { ReservationCreateService } from './reservation-create.service';

describe('ReservationCreateService', () => {
  let service: ReservationCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
