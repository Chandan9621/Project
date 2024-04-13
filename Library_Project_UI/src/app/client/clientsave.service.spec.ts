/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientsaveService } from './clientsave.service';

describe('Service: Clientsave', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsaveService]
    });
  });

  it('should ...', inject([ClientsaveService], (service: ClientsaveService) => {
    expect(service).toBeTruthy();
  }));
});
