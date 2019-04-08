import { TestBed } from '@angular/core/testing';

import { MyhostService } from './myhost.service';

describe('MyhostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyhostService = TestBed.get(MyhostService);
    expect(service).toBeTruthy();
  });
});
