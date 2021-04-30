import { TestBed } from '@angular/core/testing';

import { CentreTraitService } from './centre-trait.service';

describe('CentreTraitService', () => {
  let service: CentreTraitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreTraitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
