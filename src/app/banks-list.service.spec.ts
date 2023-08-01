import { TestBed } from '@angular/core/testing';

import { BanksListService } from './banks-list.service';

describe('BanksListService', () => {
  let service: BanksListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanksListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
