import { TestBed, inject } from '@angular/core/testing';

import { AuthProxyService } from './auth-proxy.service';

describe('AuthProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthProxyService]
    });
  });

  it('should be created', inject([AuthProxyService], (service: AuthProxyService) => {
    expect(service).toBeTruthy();
  }));
});
