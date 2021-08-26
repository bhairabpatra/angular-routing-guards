import { TestBed } from '@angular/core/testing';

import { ChildauthGuard } from './childauth.guard';

describe('ChildauthGuard', () => {
  let guard: ChildauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
