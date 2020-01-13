import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';

describe('AuthorizeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuard]
    });
  });

  it('should ...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
