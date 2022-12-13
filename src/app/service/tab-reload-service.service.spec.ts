import { TestBed } from '@angular/core/testing';

import { TabReloadServiceService } from './tab-reload-service.service';

describe('TabReloadServiceService', () => {
  let service: TabReloadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabReloadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
