import { TestBed } from '@angular/core/testing';

import { Complaint1Service } from './complaint1.service';

describe('Complaint1Service', () => {
  let service: Complaint1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Complaint1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
