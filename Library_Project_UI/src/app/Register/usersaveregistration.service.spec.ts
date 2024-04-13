import { TestBed } from '@angular/core/testing';

import { UsersaveregistrationService } from './usersaveregistration.service';

describe('UsersaveregistrationService', () => {
  let service: UsersaveregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersaveregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
