import { TestBed } from '@angular/core/testing';

import { SingleFormService } from './single-form.service';

describe('SingleFormService', () => {
  let service: SingleFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
