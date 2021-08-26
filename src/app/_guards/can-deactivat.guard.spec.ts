import { TestBed } from '@angular/core/testing';

import { CanDeactivatGuard } from './can-deactivat.guard';

describe('CanDeactivatGuard', () => {
  let guard: CanDeactivatGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivatGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
