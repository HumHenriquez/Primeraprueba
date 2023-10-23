import { TestBed } from '@angular/core/testing';

import { RickanmortyService } from './rickanmorty.service';

describe('RickanmortyService', () => {
  let service: RickanmortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickanmortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
