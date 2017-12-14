import { TestBed, inject } from '@angular/core/testing';

import { DiscService } from './disc.service';

describe('DiscService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscService]
    });
  });

  it('should be created', inject([DiscService], (service: DiscService) => {
    expect(service).toBeTruthy();
  }));
});
