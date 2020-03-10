import { TestBed } from '@angular/core/testing';

import { ConditionManagerService } from './condition-manager.service';

describe('ConditionManagerService', () => {
  let service: ConditionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
