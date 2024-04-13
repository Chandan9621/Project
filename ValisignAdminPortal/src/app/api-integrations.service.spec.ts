import { TestBed } from '@angular/core/testing';

import { ApiIntegrationsService } from './api-integrations.service';

describe('ApiIntegrationsService', () => {
  let service: ApiIntegrationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIntegrationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
