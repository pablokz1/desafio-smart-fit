import { TestBed } from '@angular/core/testing';

import { FilterUnitService } from './filter-unit.service';

describe('FilterUnitService', () => {
  let service: FilterUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
