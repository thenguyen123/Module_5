import { TestBed } from '@angular/core/testing';

import { DataUntilService } from './data-until.service';

describe('DataUntilService', () => {
  let service: DataUntilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUntilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
