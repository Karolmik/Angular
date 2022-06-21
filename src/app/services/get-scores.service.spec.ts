import { TestBed } from '@angular/core/testing';

import { GetScoresService } from './get-scores.service';

describe('GetScoresService', () => {
  let service: GetScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
