import { TestBed } from '@angular/core/testing';

import { LoremResolver } from './lorem.resolver';

describe('LoremResolver', () => {
  let resolver: LoremResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoremResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
