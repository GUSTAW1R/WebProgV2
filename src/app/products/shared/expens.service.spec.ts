import { TestBed } from '@angular/core/testing';

import { ExpensService } from './expens.service';

describe('ExpensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensService = TestBed.get(ExpensService);
    expect(service).toBeTruthy();
  });
});
