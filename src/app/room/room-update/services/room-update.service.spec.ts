import { TestBed } from '@angular/core/testing';

import { RoomUpdateService } from './room-update.service';

describe('RoomUpdateService', () => {
  let service: RoomUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
