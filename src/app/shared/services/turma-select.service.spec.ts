import { TestBed } from '@angular/core/testing';

import { TurmaSelectService } from './turma-select.service';

describe('TurmaSelectService', () => {
  let service: TurmaSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurmaSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
