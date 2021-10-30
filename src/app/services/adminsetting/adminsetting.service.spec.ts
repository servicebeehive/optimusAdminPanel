import { TestBed } from '@angular/core/testing';

import { AdminsettingService } from './adminsetting.service';

describe('AdminsettingService', () => {
  let service: AdminsettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
