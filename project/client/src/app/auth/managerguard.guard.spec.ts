import { TestBed, async, inject } from '@angular/core/testing';

import { ManagerguardGuard } from './managerguard.guard';

describe('ManagerguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerguardGuard]
    });
  });

  it('should ...', inject([ManagerguardGuard], (guard: ManagerguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
