import { TestBed } from '@angular/core/testing';

import { ClassFrequencyService } from './class-frequency.service';

describe('ClassFrequencyService', () => {
  let service: ClassFrequencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassFrequencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
