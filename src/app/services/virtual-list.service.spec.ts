import { TestBed } from '@angular/core/testing';

import { VirtualListService } from './virtual-list.service';

describe('VirtualListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VirtualListService = TestBed.get(VirtualListService);
    expect(service).toBeTruthy();
  });
});
