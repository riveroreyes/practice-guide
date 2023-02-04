import { TestBed } from '@angular/core/testing';

import { HttpConInterceptor } from './http-con.interceptor';

describe('HttpConInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpConInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpConInterceptor = TestBed.inject(HttpConInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
