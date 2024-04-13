/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddserviceService } from './addservice.service';
// import { AddbookService } from './addbook.service';

describe('Service: Addbook', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddserviceService]
    });
  });

  it('should ...', inject([AddserviceService], (service: AddserviceService) => {
    expect(service).toBeTruthy();
  }));
});
