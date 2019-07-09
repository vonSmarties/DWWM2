import { TestBed, async, inject } from '@angular/core/testing';

import { EditionGuard } from './edition.guard';

describe('EditionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditionGuard]
    });
  });

  it('should ...', inject([EditionGuard], (guard: EditionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
