import { TestBed } from '@angular/core/testing';

import { SelectionLoggerService } from './selection-logger.service';

describe('SelectionLoggerService', () => {
  let service: SelectionLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectionLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
